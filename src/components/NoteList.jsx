import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
  

class NoteList extends Component {

    render() {

        return (

            <section>

                {this.props.notes.map((each, index) => 

                     <div key={index}>

                        <Card className='m-3'>
                            <CardBody>
                              <Button style={{float: 'right'}} size="sm" color="danger" onClick={() => this.props.handler(index)} >X</Button>
                              <CardText className="text-muted">{index + 1}</CardText>
                              <CardTitle tag="h5" className="mb-2 text-bold">{each.title}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">{each.time}</CardSubtitle>
                              <CardText>{each.text}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                    
                )}

            </section>

        )

    }

}

export default NoteList;