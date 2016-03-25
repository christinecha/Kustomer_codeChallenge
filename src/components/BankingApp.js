"use strict"

import React from 'react'
import { connect } from 'react-redux'
import * as action from '../actions'
import * as helper from '../helpers'
import { TransactionForm } from './TransactionForm'

export class BankingApp extends React.Component {
  makeTransaction(amt) {
    if (amt == 0) {
      alert("Please enter a value greater than 0.")
    } else {
      this.props.dispatch(action.ADD_TRANSACTION(amt, this.props.transactions.toJS(), this.props.currentBalance))
    }
  }

  getTransactions() {
    let adjustedBalance = this.props.initialBalance

    return this.props.transactions.map((transaction, i) => {
      adjustedBalance += parseFloat(transaction)

      return (
        <div key={i} className="item transaction-info">
          <i className={"large chevron middle aligned icon" + (transaction > 0 ? " deposit up" : " withdrawal down")}></i>
          <div>new balance: ${adjustedBalance.toFixed(2)}</div>
          <div>{transaction > 0 ? "deposit" : " withdrawal"}: ${parseFloat(transaction).toFixed(2)}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui container">
        <h3>currentBalance: ${parseFloat(this.props.currentBalance).toFixed(2)}</h3>
        <TransactionForm makeTransaction={(amt) => this.makeTransaction(amt)} />
        <div className="ui relaxed divided list">
          {this.getTransactions()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialBalance : state.get('initialBalance'),
    currentBalance : state.get('currentBalance'),
    transactions   : state.get('transactions')
  }
}

export const BankingAppContainer = connect(mapStateToProps)(BankingApp)
