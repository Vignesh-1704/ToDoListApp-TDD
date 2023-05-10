import { render,screen } from "@testing-library/react";
import Heading from "../Heading";


test("should display the heading named as ToDo List",()=>{
    render(<Heading/>)
    const headingElement = screen.getByRole("heading", {name:"ToDo List"});
    expect(headingElement).toBeVisible();
})