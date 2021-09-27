import "./assets/style/App.css";
import NoteList from "./components/NoteList";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

  }

  componentDidMount() {
    console.log(this.state.notes)

    const example_object1 = { title: 'Exemplo de nota', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae interdum nisi. Nunc finibus eget dui nec gravida. Sed tincidunt, massa ac suscipit blandit'}

    this.setState(prevState => ({
      notes: [ ...prevState.notes, example_object1]
    }));

  }

  handleSubmit(event) {

    event.preventDefault();

    let form_title = document.getElementById("form_title").value;
    let form_text = document.getElementById("form_text").value;

    this.setState(prevState => ({
        notes: [ ...prevState.notes, {
          title: form_title,
          text: form_text
        }]
    }));

  }

  render() {
    return (
      <Container>

        <h1>Add Notes</h1>

        <Form onSubmit={(event) => this.handleSubmit(event)}>

        <FormGroup row className='m-3'>
          <Label for="form_title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="text" name="email" id="form_title" placeholder="Title" />
          </Col>
        </FormGroup>

        <FormGroup row className='m-3'>
          <Label for="form_title" sm={2}>Note</Label>
          <Col sm={10}>
            <Input type="textarea" name="email" id="form_text" placeholder="Write your note" />
          </Col>
        </FormGroup>

        <FormGroup row className='m-3'>
          <Button color="primary">Create</Button>
        </FormGroup>

        </Form>

        <NoteList notes={this.state.notes} />
      </Container>
    );
  }
}

export default App;
