import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../lib/store';
import TaskList from './TaskList';

export default function InboxScreen() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.taskbox);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [])

};
