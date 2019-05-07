import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import FilePicker from "./FilePicker";

function Files(props) {
  const [fileinputs, setFileinputs] = useState({
    files: [{ value: "chocolate", label: "Chocolate" }, { value: "strawberry", label: "Strawberry" }, { value: "vanilla", label: "Vanilla" }, { value: "rose", label: "Rose" }],
    fields: [{ name: "r1", file: undefined }, { name: "r2", file: undefined }, { name: "control", file: undefined }]
  });

  // Callbacks
  const selectCallback = (name, selected, previous) => {
    let newFiles = [...fileinputs.files];
    let newFields = [...fileinputs.fields];

    if (selected !== null) {
      // Add new selection if any
      newFiles = fileinputs.files.filter(function (f) {
        return f.value !== selected.value;
      });
      for (var i = 0; i < newFields.length; i++) {
        if (newFields[i].name === name) {
          newFields[i].file = selected.value;
          break;
        }
      }
    }
    if (previous !== null) {
      // Clear previous selection if any
      newFiles.push(previous);
      for (var i = 0; i < newFields.length; i++) {
        if (newFields[i].name === name) {
          newFields[i].file = undefined;
          break;
        }
      }
    }    
    setFileinputs({
      files: newFiles,
      fields: newFields
    });
  }


  // Render
  const fileList = fileinputs.files.map((file, k) => <option key={k}>{file.label}</option>);

  const pickers = fileinputs.fields.map((field, k) => (
    <div>
      <h4>{field.name}</h4>
      <FilePicker name={field.name} options={fileinputs.files} className="form-control" selectCallback={selectCallback} />
    </div>
  ));
  return (
    <div>
      <Row>
        <Label for="exampleSelectMulti">Files</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple className="form-control">
          {fileList}
        </Input>
      </Row>
      {pickers}
    </div>
  );
}
export default Files;
