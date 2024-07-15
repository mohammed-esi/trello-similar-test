import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import capitalizeFirstChar from '../utils/capitalizeFirstChar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import GradeIcon from '@mui/icons-material/Grade';
import theme from '../theme';

interface TaskProps {
  task: {
    id: string;
    candidateName: string;
    location: string;
    rating: number;
    contactNumber: string;
    status: 'new' | 'followed' | '';
    picture: string;
    progress: 'rejected' | 'to do' | 'progressing' | 'done';
  };
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  let color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'inherit' = 'inherit';

  if (task.progress === 'to do') {
    color = 'secondary';
  } else if (task.progress === 'rejected') {
    color = 'error';
  } else if (task.progress === 'progressing') {
    color = 'warning';
  } else if (task.progress === 'done') {
    color = 'success';
  }
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ padding: 2, marginBottom: 2, boxShadow: 'none' }}
        >
          <Stack
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
            mb={2}
          >
            <Stack direction='row' spacing={2}>
              <img
                src={task.picture}
                style={{
                  borderRadius: 12,
                  width: 60,
                  height: 60,
                }}
              />
              <Stack direction='column' spacing={1}>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <SignalCellularAltIcon color={color} />
                  <Typography variant='body1' fontWeight={700}>
                    {task.candidateName}
                  </Typography>
                </Stack>
                <Typography variant='body1' fontWeight={600} color='secondary'>
                  {task.location}
                </Typography>
              </Stack>
            </Stack>
            {task.status && task.status === 'new' && (
              <Chip
                label={capitalizeFirstChar(task.status)}
                variant='outlined'
                size='medium'
              />
            )}
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Stack
              direction='row'
              sx={{
                background: theme.palette.grey[50],
                borderRadius: 2,
                py: '8px',
                px: '6px',
              }}
            >
              <Typography variant='body2' fontWeight={700} mr='2px'>
                {task.rating}
              </Typography>
              <GradeIcon sx={{ color: '#FFCA02' }} />
            </Stack>
            <Typography variant='body1' color='secondary' fontWeight={600}>
              {task.contactNumber}
            </Typography>

            {task.status && task.status === 'followed' ? (
              <Chip
                label={capitalizeFirstChar(task.status)}
                variant='filled'
                color='primary'
                sx={{ fontWeight: 600 }}
                size='medium'
              />
            ) : (
              <Box width={80} />
            )}
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
};

export default Task;
