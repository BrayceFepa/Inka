import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import FormCheck from '../components/FormCheck/FormCheck';
import Home from '../pages/Home/Home';

const Router = () => {
  return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/arielle-admin' element={<FormCheck/>} />
    </Routes>
  )
}

export default Router