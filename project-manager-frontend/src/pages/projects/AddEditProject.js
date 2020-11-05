import { TextField } from '@material-ui/core';
import React from 'react';
import Base from '../../components/Base';

const AddEditProject = () => {
    return(
        <Base title="Add Project">
            <div>
                <form>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                </form>
            </div>
        </Base>
    )
}

export default AddEditProject;