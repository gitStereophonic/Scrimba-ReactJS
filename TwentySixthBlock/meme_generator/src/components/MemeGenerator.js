/**
 * @author Raccoon Developer
 * @date 04.05.2019
 * 
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 * 
 *
 * We'll be using an API that provides a bunch of meme images.
 * 
 * Your task:
 * make an API call to "https://api.imgflip.com/get_memes" and save the 
 * data that comes back (`response.data.memes`) to a new state property
 * called `allMemeImgs`. (The data that comes back is an array)

 */

import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      isLoading: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(jResponse => {
        const { memes } = jResponse.data;
        this.setState({
          isLoading: false,
          allMemeImgs: memes
        })
      });
  }

  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site (`.url`)
   */
  handleSubmit(event) {
    event.preventDefault();
    // get a random int (index in the array)
    const index = Math.floor(Math.random() * this.state.allMemeImgs.length);

    // get the meme from that index
    const newMeme = this.state.allMemeImgs[index].url;

    // set `randomImg` to the `.url` of the random item I grabbed
    this.setState({
      randomImage: newMeme
    });
  }

  /**
   * Create the onChagne handler method
   * It should update the corresponding state on every change of the input box
   */
  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  /**
   * Create 2 input fields, one for the topText and one for the bottomText
   * Remember that these will be "controlled forms", so make sure to add
   * all the attributes you'll need for that to work
   */
  render() {
    return (
      <div>
        <p>{this.state.isLoading ? "Loading..." : "This is meme generator"}</p>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.onChangeHandler}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="Meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
