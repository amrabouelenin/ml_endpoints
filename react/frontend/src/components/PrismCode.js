import React from "react"
import Prism from "prismjs"
import IconButton from '@mui/material/IconButton';
import CopyAllIcon from '@mui/icons-material/CopyAll';
require('prismjs/components/prism-python');


export class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    this.highlight()
  }
  componentDidUpdate() {
    this.highlight()
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }
  render() {
    const { code, plugins, language } = this.props
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <IconButton className="copy_icon" color="primary" aria-label="upload picture" component="span" onClick={() => {navigator.clipboard.writeText(code)}}
  >
          <CopyAllIcon/>
        </IconButton>
        <code ref={this.ref} className={`language-${language}`}>

          {code}
        </code>
      </pre>
    )
  }
}