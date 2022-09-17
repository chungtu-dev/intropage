import React from 'react';

const ButtonTitleTodo = () => {
  return (
    <>
      {[
        'Todos App',
      ].map((variant) => (
        <div key={variant} variant={variant} className='btn-title-todo'>
          {variant}
        </div>
      ))}
    </>
  );
};

export default ButtonTitleTodo;