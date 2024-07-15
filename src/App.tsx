import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Category from './components/Category';
import { setCategoryTasks } from './redux/taskSlice';

const App: React.FC = () => {
  const categories = useSelector((state: RootState) => state.tasks.categories);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCategory = categories.find(
      (cat) => cat.id === source.droppableId
    );
    const destinationCategory = categories.find(
      (cat) => cat.id === destination.droppableId
    );

    if (sourceCategory && destinationCategory) {
      const sourceTasks = [...sourceCategory.tasks];
      const [movedTask] = sourceTasks.splice(source.index, 1);

      if (sourceCategory.id === destinationCategory.id) {
        sourceTasks.splice(destination.index, 0, movedTask);
        dispatch(
          setCategoryTasks({
            categoryId: sourceCategory.id,
            tasks: sourceTasks,
          })
        );
      } else {
        const destinationTasks = [...destinationCategory.tasks];
        destinationTasks.splice(destination.index, 0, movedTask);

        dispatch(
          setCategoryTasks({
            categoryId: sourceCategory.id,
            tasks: sourceTasks,
          })
        );
        dispatch(
          setCategoryTasks({
            categoryId: destinationCategory.id,
            tasks: destinationTasks,
          })
        );
      }
    }
  };

  return (
    <>
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container gap={1}>
          {categories.map((category) => (
            <Grid key={category.id} item xs={12} lg={4} xl={3}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </>
  );
};

export default App;
