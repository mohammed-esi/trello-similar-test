import React, { useCallback } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import {
  Paper,
  Typography,
  Box,
  useTheme,
  Stack,
  Button,
  IconButton,
  Divider,
  alpha,
} from '@mui/material';
import Task from './Task';
import {
  reorderTasksByRating,
  selectRejectedTasksCount,
  Task as TaskType,
} from '../redux/taskSlice';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import AddIcon from '@mui/icons-material/Add';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface CategoryProps {
  category: {
    id: string;
    name: string;
    tasks: TaskType[];
    totalTasks: number;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // Get the rejected tasks count for the current category
  const rejectedTasksCount = useSelector((state: RootState) =>
    selectRejectedTasksCount(state.tasks, category.id)
  );

  const handleReorderTasks = useCallback(() => {
    dispatch(reorderTasksByRating({ categoryId: category.id }));
  }, [dispatch, category.id]);

  return (
    <Droppable droppableId={category.id}>
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={{
            minWidth: 400,
            margin: 2,
            minHeight: 200,
          }}
        >
          <Paper
            sx={{
              padding: 2,
              boxShadow: 'none',
              background: theme.palette.grey[50],
              '&:hover .add-button': {
                display: 'inline-flex',
              },
            }}
          >
            <Stack direction='column' sx={{ mb: 2, py: 2 }} spacing={2}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Stack direction='row' spacing='3' alignItems='center'>
                  <CropSquareIcon color='secondary' fontSize='large' />
                  <Typography variant='h6' fontWeight={600}>
                    {category.name}
                  </Typography>
                </Stack>
                <Button
                  variant='outlined'
                  startIcon={<AddIcon />}
                  className='add-button'
                  sx={{ display: 'none' }}
                >
                  Add Applicants
                </Button>
                <IconButton>
                  <LowPriorityIcon onClick={handleReorderTasks} />
                </IconButton>
              </Stack>

              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Typography variant='h5' fontWeight={700}>
                    {rejectedTasksCount}
                  </Typography>
                  <Typography
                    variant='body2'
                    fontWeight={700}
                    color='secondary'
                    textTransform='uppercase'
                  >
                    Rejected
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Typography variant='h5' fontWeight={700}>
                    {category.totalTasks}
                  </Typography>
                  <Typography
                    variant='body2'
                    fontWeight={700}
                    color='secondary'
                    textTransform='uppercase'
                  >
                    Total
                  </Typography>
                </Stack>
              </Stack>
              <Divider
                sx={{
                  borderBottom: `8px solid`,
                  borderRadius: 2,
                  borderBottomColor:
                    category.id === 'applied'
                      ? '#4BBCF7'
                      : category.id === 'shortlisted'
                      ? '#70D26C'
                      : category.id === 'interview'
                      ? '#FE5D55'
                      : 'transparent',
                }}
              />
            </Stack>
            <Box
              sx={{
                maxHeight: '60vh', // Set the maximum height to the height of the screen
                overflowY: 'auto', // Make the box scrollable
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: theme.palette.grey[50],
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: alpha(theme.palette.secondary.main, 0.5),
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: theme.palette.secondary.main,
                },
                '&::-webkit-scrollbar-corner': {
                  background: 'transparent',
                },
              }}
            >
              {category.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {snapshot.isDraggingOver && (
                <Box
                  sx={{
                    height: '70px', // Adjust this height to match your Task component
                    border: `3px dashed ${theme.palette.secondary.main}`,
                    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                    minHeight: 140,
                    borderRadius: 2,
                    mt: 2,
                  }}
                />
              )}
              {provided.placeholder}
            </Box>
          </Paper>
        </Box>
      )}
    </Droppable>
  );
};

export default Category;
