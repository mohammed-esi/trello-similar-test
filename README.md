# Trello Clone

A simple Trello-like task management application built with React, Redux, and Material-UI. This project demonstrates the usage of drag-and-drop functionality, state management with Redux, and theming with Material-UI.

## Features

- **Drag and Drop**: Move tasks between categories using drag-and-drop.
- **State Management**: Manage the application state with Redux.
- **Material-UI**: Beautiful UI components and theming.
- **Task Filtering**: Filter tasks based on their status.
- **Task Reordering**: Reorder tasks within categories based on rating.
- **Responsive Design**: Mobile-friendly layout.

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/trello-clone.git
cd trello-clone

yarn install

yarn dev

```

2. **Project Structure**:

```bash
trello-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Category.tsx
│   │   ├── Task.tsx
│   ├── redux/
│   │   ├── store.ts
│   │   ├── taskSlice.ts
│   ├── theme/
│   │   ├── index.ts
│   ├── utils/
│   │   ├── capitalize.ts
│   ├── mockData/
│   │   ├── mockData.ts
│   ├── App.tsx
│   ├── index.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock

```

3. **Usage**:

Dragging and Dropping Tasks

- Click and hold a task card to start dragging.
- Drag the task card to the desired category and release to drop.

Reordering Tasks

- Click the reorder icon (LowPriorityIcon) in any category to sort tasks by rating.

4. **Customization**:

The project uses Material-UI's theming system. You can customize the theme by editing the src/theme/index.ts file.

```bash
import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F70F3',
    },
    secondary: {
      main: '#A0B0C7',
    },
    grey: {
      50: '#F2F4F7',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          color: '#3F70F3',
          borderColor: '#3F70F3',
          borderRadius: 8,
          fontWeight: 600,
          textTransform: 'none',
          backgroundColor: alpha('#3F70F3', 0.1),
          '&:hover': {
            backgroundColor: alpha('#3F70F3', 0.15),
          },
        },
      },
    },
  },
});

export default theme;
```

5. **Mock data**:

You can find and modify the mock data used in the application in the src/mockData/mockData.ts file.

6. **Contributing**:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.

6. **Acknowledgements**:

- React
- Redux
- Material UI
- Unsplash images
