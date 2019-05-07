import React, {useState} from 'react';

import Select from 'react-select';

function FilePicker(props) {
  const [selected, setSelected] = useState(null);

  const  handleChange = (selectedOption) => {
//    console.log(`Option selected:`, selectedOption, ' previous:  ', selected);
    setSelected(selectedOption);
    props.selectCallback(props.name, selectedOption, selected);
  }

  return (
    <Select
        value={selected}
        onChange={handleChange}
        options={props.options}
        isSearchable={true}
        isClearable={true}
      />
  );
}
export default FilePicker;
