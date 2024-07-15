import { Task, Category } from '../redux/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const mockTasks: Task[] = [
  {
    id: uuidv4(),
    candidateName: 'John Doe',
    location: 'New York',
    rating: 4.5,
    contactNumber: '123-456-7890',
    status: 'new',
    picture:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'to do',
  },
  {
    id: uuidv4(),
    candidateName: 'Jane Smith',
    location: 'San Francisco',
    rating: 3.8,
    contactNumber: '987-654-3210',
    status: 'followed',
    picture:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'rejected',
  },
  {
    id: uuidv4(),
    candidateName: 'Alice Johnson',
    location: 'Los Angeles',
    rating: 4.2,
    contactNumber: '555-555-5555',
    status: '',
    picture:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'done',
  },
  {
    id: uuidv4(),
    candidateName: 'Michael Brown',
    location: 'Chicago',
    rating: 4.7,
    contactNumber: '222-333-4444',
    status: 'new',
    picture:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'progressing',
  },
  {
    id: uuidv4(),
    candidateName: 'Emily Davis',
    location: 'Houston',
    rating: 4.0,
    contactNumber: '111-222-3333',
    status: 'followed',
    picture:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'to do',
  },
  {
    id: uuidv4(),
    candidateName: 'David Wilson',
    location: 'Phoenix',
    rating: 4.3,
    contactNumber: '444-555-6666',
    status: '',
    picture:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'done',
  },
  {
    id: uuidv4(),
    candidateName: 'Sarah Lee',
    location: 'Philadelphia',
    rating: 3.9,
    contactNumber: '777-888-9999',
    status: 'new',
    picture:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'rejected',
  },
  {
    id: uuidv4(),
    candidateName: 'Chris Johnson',
    location: 'San Antonio',
    rating: 4.1,
    contactNumber: '888-999-0000',
    status: 'followed',
    picture:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'to do',
  },
  {
    id: uuidv4(),
    candidateName: 'Jessica Williams',
    location: 'San Diego',
    rating: 4.6,
    contactNumber: '999-000-1111',
    status: '',
    picture:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'progressing',
  },
  {
    id: uuidv4(),
    candidateName: 'Daniel Garcia',
    location: 'Dallas',
    rating: 3.7,
    contactNumber: '555-444-3333',
    status: 'new',
    picture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'rejected',
  },
  {
    id: uuidv4(),
    candidateName: 'Laura Martinez',
    location: 'San Jose',
    rating: 4.4,
    contactNumber: '111-333-2222',
    status: 'followed',
    picture:
      'https://images.unsplash.com/photo-1502767089025-6572583495b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'done',
  },
  {
    id: uuidv4(),
    candidateName: 'Paul Anderson',
    location: 'Austin',
    rating: 4.1,
    contactNumber: '444-777-5555',
    status: '',
    picture:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'progressing',
  },
  {
    id: uuidv4(),
    candidateName: 'Megan Miller',
    location: 'Jacksonville',
    rating: 4.0,
    contactNumber: '222-666-5555',
    status: 'new',
    picture:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'to do',
  },
  {
    id: uuidv4(),
    candidateName: 'Anthony Rodriguez',
    location: 'Fort Worth',
    rating: 3.8,
    contactNumber: '666-333-1111',
    status: 'followed',
    picture:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'done',
  },
  {
    id: uuidv4(),
    candidateName: 'Angela White',
    location: 'Columbus',
    rating: 4.3,
    contactNumber: '333-999-7777',
    status: '',
    picture:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'progressing',
  },
  {
    id: uuidv4(),
    candidateName: 'Brian Lewis',
    location: 'Charlotte',
    rating: 4.5,
    contactNumber: '777-555-4444',
    status: 'new',
    picture:
      'https://images.unsplash.com/photo-1517898718679-3c421c012a15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    progress: 'to do',
  },
];

const mockCategories: Category[] = [
  {
    id: 'applied',
    name: 'Applied',
    type: '',
    tasks: mockTasks,
    totalTasks: mockTasks.length,
  },
  {
    id: 'shortlisted',
    name: 'Shortlisted',
    type: '',
    tasks: [],
    totalTasks: 0,
  },
  { id: 'interview', name: 'Interview', type: '', tasks: [], totalTasks: 0 },
];

export { mockTasks, mockCategories };
