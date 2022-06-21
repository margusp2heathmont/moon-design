import React from 'react';

export interface Props {
  description: string;
  title?: string;
  iconHeader?: React.ReactElement;
  buttons?: React.ReactElement[];
}

const Multiline: React.FC<Props> = ({
  description,
  title,
  iconHeader,
  buttons
}) => {
  return (
    <>
    {iconHeader &&
    <div className='w-full bg-goten flex rounded-lg justify-between'>
        <div className='flex-col p-6'>
          <div className='flex  justify-between'>
            <div className='font-semibold'>{title}</div>
          </div>
          <div className='block align-middle items-center text-trunks'>{description}</div>
        </div>
        <div className='flex justify-end items-baseline p-6 cursor-pointer'>{iconHeader}</div>
        </div>}

        {!iconHeader && buttons && (
          <div className='w-full bg-goten sm:flex rounded-lg justify-between'>
             <div className='flex-col p-6'>
               <div className='flex justify-between'>
                 <div className='font-semibold'>{title}</div>
               </div>
                <div className='block align-middle items-center text-trunks'>{description}</div>
              </div>
           <div className='flex justify-end grow items-end sm:items-center mr-8'>
              {buttons &&
                buttons.map((button, index) => <span key={index}>{button}</span>)}
           </div>
        </div>
      )}
    
    </>
  );
};

export default Multiline;
