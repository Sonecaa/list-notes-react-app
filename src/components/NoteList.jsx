import React, { Component } from 'react';
import Card from './Card';

class NoteList extends Component {

    render() {

        return (

            <section>

                {Array.of('x', 'y', 'z').map((cat, index) => {

                    return (
                        <div key={index}>
                            {cat}
                            <Card />

                        </div>
                    )

                })}


            </section>

        )

    }

}

export default NoteList;