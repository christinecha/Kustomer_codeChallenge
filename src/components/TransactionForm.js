"use strict"

import React from 'react'

export class TransactionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionValue: 0.00
    }
  }

  handleTransactionInput(e) {
    this.setState({
      transactionValue: e.target.value
    })
  }

  formatTransactionInput() {
    this.setState({
      transactionValue: parseFloat(this.state.transactionValue).toFixed(2)
    })
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui input">
          <input type="number"
            value={this.state.transactionValue}
            step="0.01"
            min="0.00"
            onChange={(e) => this.handleTransactionInput(e)}
            onBlur={() => this.formatTransactionInput()}/>
        </div>
        <button
          className="ui button"
          onClick={() => this.props.makeTransaction(this.state.transactionValue)}>
          deposit
        </button>
        <button
          className="ui button"
          onClick={() => this.props.makeTransaction(-(this.state.transactionValue))}>
          withdraw
        </button>
      </div>
    )
  }
}
