import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";



const Income = () => {
 const {addIncome} = useGlobalContext()
  return (
    <IncomeStyled >
      <InnerLayout>
        <h1>Income</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
            <div className="incomes">

              
            </div>
          </div>
        </div>

      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`

export default Income 

