import React from 'react'
import { useChangePasswordMutation } from '../redux/slices/api/userApiSlice';
import { toast } from 'sonner';
import ModalWrapper from './ModalWrapper';
import Loading from '../components/Loader';
import {useForm} from "react-hook-form"
import { Dialog } from '@headlessui/react';
import Textbox from './Textbox';
import Button from "./Button"
const ChangePassword = ({setOpen}) => {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const [changeUserPassword ,{isLoading}]=useChangePasswordMutation();
     const handleOnSubmit = async(data) => {
        if(data.password!==data.cpass){
            const result=await updateUser(data).unwrap()
            toast.warming("password dosen't match");
            return ;
          }
          try {
         
            const result =await changeUserPassword(data).unwrap()
            toast.success("new User added successfully")
          setTimeout(()=>{
              setOpen(false)
          },1500)
        } catch (error) {
          toast.success("something went wrong")
        }
    }
  return (
    <>
        <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
           Change Password
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='New Password'
              type='password'
              name='password'
              label='New Password'
              className='w-full rounded'
              register={register("password", {
                required: "password name is required!",
              })}
              error={errors.password ? errors.password.message : ""}
            />
             <Textbox
              placeholder='Confirm New Password'
              type='password'
              name='cpass'
              label='Confirm New Password'
              className='w-full rounded'
              register={register("cpass", {
                required: "Confirm New Password is required!",
              })}
              error={errors.cpass ? errors.cpass.message : ""}
            />
          /</div>
          {isLoading ? (
            <div className='py-5'>
              <Loading />
            </div>
          ) : (
            <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
              <Button
                type='submit'
                className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                label='Submit'
              />

              <Button
                type='button'
                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                onClick={() => setOpen(false)}
                label='Cancel'
              >
                Cancel
              </Button>
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  )
}

export default ChangePassword