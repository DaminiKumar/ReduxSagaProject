import App from "./App";
import React from "react";
import { shallow } from "enzyme";

test("ViewByUserId is rendered properly", ()=>{
  const component= shallow(<App/>)

  const viewByUserId = component.find("ViewByUserId").exists()
  expect(viewByUserId).toBe(true) 
})

test("SortById is rendered properly", ()=>{
  const component= shallow(<App/>)

  const sortById = component.find("SortById").exists()
  expect(sortById).toBe(true) 
})

test("SortByTitle is rendered properly", ()=>{
  const component= shallow(<App/>)

  const sortByTitle = component.find("SortByTitle").exists()
  expect(sortByTitle).toBe(true) 
})

test("SortByBody is rendered properly", ()=>{
  const component= shallow(<App/>)

  const sortByBody = component.find("SortByBody").exists()
  expect(sortByBody).toBe(true) 
})

test("SortByUserId is rendered properly", ()=>{
  const component= shallow(<App/>)

  const SortByUserId = component.find("SortByUserId").exists()
  expect(SortByUserId).toBe(true) 
})

test("Home is rendered properly", ()=>{
  const component= shallow(<App/>)

  const home= component.find("Home").exists()
  expect(home).toBe(true) 
})

