import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
  

class NoteList extends Component {

    render() {

        return (

            <section>

                {this.props.notes.map((each, index) => 

                     <div key={index}>

                        <Card>
                            <CardBody>
                              <CardTitle tag="h5">{index + 1}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">{each.title}</CardSubtitle>
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