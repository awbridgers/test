import React, {Component} from 'react';



class Canvas extends Component{
  constructor(){
    super();
    this.canvas = null;
  }
  componentDidUpdate(){
    this.colorSquares();
  }
  componentDidMount(){
    this.colorSquares();
  }
  colorSquares = () =>{
    let tetronimo = this.props.current;
    console.log(tetronimo)
    const ctx = this.canvas.getContext('2d');
    ctx.lineWidth = '0'
    //clear the canvas before redrawing
    ctx.beginPath()
    ctx.rect(0,0,350,560)
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.closePath();
    //draw in the sqaures already on the board
  }

  render(){
    return(
      <div className = 'board'>
        <canvas width = '350' height = "560" ref = {(ref)=> this.canvas = ref}></canvas>
      </div>
    )
  }
}

export default Canvas
