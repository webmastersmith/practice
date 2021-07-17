import React from 'react'

const withData = (WrapperComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      fetch(this.props.dataSource)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data.slice(0, 3) }))
    }

    render() {
      const { data } = this.state
      const { dataSource, ...otherProps } = this.props
      return <WrapperComponent data={data} {...otherProps} />
    }
  }
  return WithData
}
export default withData
