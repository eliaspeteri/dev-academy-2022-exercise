import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Icon,
  Progress,
  Segment
} from 'semantic-ui-react';

import FileUploadService from '../services/fileUpload';

const FileUploadForm: React.FC = (): JSX.Element => {
  const [fileSelected, setFileSelected] = useState(null);
  const [fileNameSelected, setFileNameSelected] = useState('');
  const [statusCode, setStatusCode] = useState(0);

  const fileChange = (e: any): void => {
    if (!e.target.files) return;
    setFileSelected(e.target.files[0]);
    setFileNameSelected(e.target.files[0].name);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData: FormData = new FormData();
    console.table(fileSelected);
    if (fileSelected) {
      formData.append('csv', fileSelected, fileNameSelected);
    }

    try {
      console.log('Sending file');
      const responseStatusCode: number = await FileUploadService.upload(
        formData
      );
      setStatusCode(responseStatusCode);
    } catch (error) {
      //? Toast here?
    }
  };

  return (
    <Container>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Button
              fluid
              as='label'
              htmlFor='file'
              type='button'
              animated='fade'
            >
              <Button.Content visible>
                <Icon name='file' />
              </Button.Content>
              <Button.Content hidden>Choose a file</Button.Content>
            </Button>
            <input type='file' id='file' hidden onChange={fileChange} />
            <Form.Input
              fluid
              label='File chosen: '
              readOnly
              value={fileNameSelected}
            />
            <Button type='submit'>Upload</Button>
            {statusCode && statusCode === 200 ? (
              <Progress
                style={{ marginTop: '20px' }}
                percent={100}
                success
                active
                progress
              />
            ) : statusCode && statusCode === 500 ? (
              <Progress
                style={{ marginTop: '20px' }}
                percent={100}
                error
                active
                progress
              />
            ) : null}
          </Form.Field>
        </Form>
      </Segment>
    </Container>
  );
};

export default FileUploadForm;
