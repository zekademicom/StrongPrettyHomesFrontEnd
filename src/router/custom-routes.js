
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/users/ContactPage'
import HomePage from '../pages/users/HomePage'
import AuthPage from '../pages/users/AuthPage'
import PropertiesPage from '../pages/users/PropertiesPage'
import UserTemplate from '../templates/user-template'
import PropertyDetailsPage from '../pages/users/PropertyDetailsPage'
import ProtectedRoute from './protected-route'
import UserReservationsPage from '../pages/users/UserReservationsPage'
import UserReservationDetailsPage from '../pages/users/UserReservationDetailsPage'
import UnAuthorizedPage from '../pages/common/UnAuthorizedPage'
import NotFoundPage from '../pages/common/NotFoundPage'
import AboutPage from '../pages/users/AboutPage'
import ProfilePage from '../pages/users/ProfilePage'

const CustomRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/">
            {/* ADMIN ROUTES */}

            {/* USER ROUTES */}
            <Route index element={<UserTemplate><HomePage/></UserTemplate>}/>
            <Route path="about" element={<UserTemplate><AboutPage/></UserTemplate>}/>
            <Route path="contact" element={<UserTemplate><ContactPage/></UserTemplate>}/>
            <Route path="auth" element={<UserTemplate><AuthPage/></UserTemplate>}/>
            <Route path="properties"> 
         <Route index element={<UserTemplate><PropertiesPage/></UserTemplate>}/>
         <Route path=":propertyId" element={<UserTemplate><PropertyDetailsPage/></UserTemplate>}/>
         </Route>

         <Route path="user">
            <Route index element={<ProtectedRoute><UserTemplate><ProfilePage /></UserTemplate></ProtectedRoute>} />
            <Route path="reservations">
              <Route index element={<ProtectedRoute><UserTemplate><UserReservationsPage/></UserTemplate></ProtectedRoute>} />
              <Route path=":reservationId" element={<ProtectedRoute><UserTemplate><UserReservationDetailsPage/></UserTemplate></ProtectedRoute>} />
            </Route>
          </Route>

          <Route path='unauthorized' element={<UserTemplate><UnAuthorizedPage /></UserTemplate>} />
          <Route path='*' element={<UserTemplate><NotFoundPage /></UserTemplate>} />

    
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes

