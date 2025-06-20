import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import "./server";
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import NotFound from './pages/NotFound';
import AuthRequired from './components/AuthRequired';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />}/>
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
