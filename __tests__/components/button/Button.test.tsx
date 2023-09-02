import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button/Button";
import { IoCheckmarkSharp } from "react-icons/io5";

describe("Button Component", () => {
    test("renders button with default type and text", () => {
        const { getByRole, queryByRole } = render(<Button>click me</Button>);
        const button = getByRole("button", {
            name: "click me",
        });
        const icon = queryByRole("icon");
        expect(icon).not.toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test("renders button with custom type, color, icon and textn width", () => {
        const { getByRole } = render(
            <Button variant="error" icon={<IoCheckmarkSharp />} block={true}>
                {" "}
                <span>custom</span>
            </Button>
        );
        const button = getByRole("button", {
            name: "custom",
        });
        const icon = getByRole("icon");
        expect(icon).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("bg-red-100");
        expect(button).toHaveClass("w-full");
    });

    test("handles onClick event", () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button onClick={handleClick}>click</Button>);
        const button = getByRole("button", {
            name: "click",
        });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});