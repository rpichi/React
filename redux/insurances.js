console.clear()
/// People dropping off a form (Actions creators)

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amountOfMoneyToCollect
    }
  };
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
}

//Reducers (Departments!)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // we car about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  
  //we don't care tthe action (form!!)
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amount;
  }
  else if (action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
} 

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies;
}

const { createStore, combineReducers } = Redux;

const ourDepartaments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
})

const store = createStore(ourDepartaments);
//const action = createPolicy('Alex', 20);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Juan', 30));
store.dispatch(createPolicy('Pedro', 40));
store.dispatch(deletePolicy('Pedro'));
store.dispatch(createClaim('Alex', 120));
console.log(store.getState());