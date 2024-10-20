import React from 'react'

const FormControls = ({formControls=[], formData, setFormData}) => {

    function renderComponentByType(){

    }

  return (
    <div className='flex flex-col gap-3'>
      {
        formControls.map(controleItem =>
            <div key={controleItem.name}>
                
            </div>
         )
      }
    </div>
  )
}

export default FormControls
