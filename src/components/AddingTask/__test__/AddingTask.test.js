import { fireEvent, render,screen } from "@testing-library/react";
import AddingTask from "../AddingTask"

//Creating a mock function called mocksetTodos to pass 
const mocksetTodos = jest.fn();

describe("Checks for Input Field Element", ()=>{

    test("should have a text input field",()=>{
        render(<AddingTask todos = {[]} setTodos = {mocksetTodos}/>)
        const inputFieldElement = screen.getByPlaceholderText("Add your Task here.");
        expect(inputFieldElement).toBeVisible();
    })
    
    test("should display the text content when typing into the input field",()=>{
        render(<AddingTask todos = {[]} setTodos = {mocksetTodos}/>)
        const TextBoxElement = screen.getByPlaceholderText("Add your Task here.");
        fireEvent.click(TextBoxElement)
        fireEvent.change(TextBoxElement,{target: {value:"Task One"}})
        expect(TextBoxElement.value).toBe("Task One")
    })
})


describe("Checks for Add Button Element",()=>{

    test("should display the add button",()=>{
        render(<AddingTask todos = {[]} setTodos = {mocksetTodos}/>)
        const AddButtonElement = screen.getByRole("button",{name: "Add"})
        expect(AddButtonElement).toBeVisible();
    })

    test("should add tasks when add button is clicked once",()=>{
        render(<AddingTask todos ={[]} setTodos ={mocksetTodos}/>)
        const AddButtonElement = screen.getByRole("button",{name: "Add"})
        fireEvent.click(AddButtonElement)
        expect(mocksetTodos).toBeCalled();
    })

    test("should clear the inputfield after add button is clicked once",()=>{
        render(<AddingTask todos ={[]} setTodos ={mocksetTodos}/>)
        const TextBoxElement = screen.getByPlaceholderText("Add your Task here.");
        fireEvent.click(TextBoxElement)
        fireEvent.change(TextBoxElement,{target: {value:"Task One"}})
        const AddButtonElement = screen.getByRole("button",{name: "Add"})
        fireEvent.click(AddButtonElement)
        expect(TextBoxElement.value).toBe("")
    })
})