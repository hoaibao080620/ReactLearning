import { FormControl, InputGroup,Button } from 'react-bootstrap'

const InputItem = ({isAdd,input,handleChange,handleSubmit}) => {

    
    return (
        <InputGroup className="mb-3">
    <FormControl
      placeholder="eg: egg,..."
      value={input.name ?? ''}
      onChange={handleChange}
      name="name"
    />
    <InputGroup.Append>
      <Button onClick={handleSubmit} variant="outline-secondary">{isAdd ? 'Submit' : 'Edit'}</Button>
    </InputGroup.Append>
  </InputGroup>
    )
}

export default InputItem
