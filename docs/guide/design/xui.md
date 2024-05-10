---
id: xui
title: XUI
---

(eXtensible User Interface)  
Pluto takes a unique approach at building user interfaces.  

# Purpose
Pluto leverages XML/XUI (abbreviated onward as XUI), an XML-based language specifically designed for Pluto.
It allows developers to define the structure and content of UI elements in a human-readable format.
Similar to HTML for web pages, XUI uses tags and attributes to represent various UI components like buttons, text fields, and windows.  

This approach offers several advantages: first, it provides a familiar and declarative way to build interfaces, making development faster and easier.
Second, XUI separates the UI definition from the application logic, leading to cleaner code and improved maintainability.
In this sense, XUI is very similar to the JSX/React approach of separating both from each other.
By using a dedicated design language called Extensive Design for XUI, Pluto ensures a consistent look and feel across applications within the Web OS.

# Implementation
Although XUI is a declarative method of writing user interfaces, under the hood it uses an imperative system-call structure, available and implemented in [Satellite](/guide/satellite). Satellite uses the 41Render system process to draw these GUI elements to the screen using the DOM renderer.  

XUI is not the same as HTML. XUI is ultimately transpiled and rendered as HTML, but the outputs of the HTML can differ greatly from the XUI source.