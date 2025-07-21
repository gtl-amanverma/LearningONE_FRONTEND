export interface TAnswerType {
  id: string;
  answer: string;
}

export interface TQuestionType {
  id: string;
  question: string;
  description: string;
  options: Array<TAnswerType>;
  correctAnswer: Array<TAnswerType>;
}

export interface TTopicType {
  id: string;
  title: string;
  description: string;
  examTime: string;
  questions: Array<TQuestionType>;
}

export interface TSelectedType {
  questionId: string;
  correctAnswer: Array<string>;
  selectedAnswer: Array<string>;
}

export interface TSelectedAnswerType {
  userId: string;
  topicId: string;
  selectedAnswer: Array<TSelectedType>;
}

export const topic: Array<TTopicType> = [
  {
    id: "1",
    title: "HTML (Hypertext Markup Language)",
    description:
      "Fundamental language for creating web pages and web applications.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What does HTML stand for?",
        description:
          "HTML, or HyperText Markup Language, is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.",
        options: [
          { id: "1", answer: "Hypertext Markup Language" },
          { id: "2", answer: "Hyperlink and Text Markup Language" },
          { id: "3", answer: "Home Tool Markup Language" },
          { id: "4", answer: "Hyper Transfer Markup Language" },
        ],
        correctAnswer: [{ id: "1", answer: "Hypertext Markup Language" }],
      },
      {
        id: "2",
        question: "Which HTML tag is used for creating an unordered list?",
        description:
          "HTML provides several tags for creating lists. An unordered list, where items are typically marked with bullet points, is created using the `<ul>` tag. Each list item within the `<ul>` must be enclosed in an `<li>` (list item) tag.",
        options: [
          { id: "1", answer: "<ol>" },
          { id: "2", answer: "<li>" },
          { id: "3", answer: "<dl>" },
          { id: "4", answer: "<ul>" },
        ],
        correctAnswer: [{ id: "4", answer: "<ul>" }],
      },
      {
        id: "3",
        question: "Which attribute is used to specify the URL of a link?",
        description:
          "The `<a>` (anchor) tag is used to create hyperlinks. The `href` attribute within the `<a>` tag specifies the destination URL or path that the link points to. This can be an absolute URL to an external website or a relative path to another page within the same website.",
        options: [
          { id: "1", answer: "src" },
          { id: "2", answer: "link" },
          { id: "3", answer: "href" },
          { id: "4", answer: "url" },
        ],
        correctAnswer: [{ id: "3", answer: "href" }],
      },
      {
        id: "4",
        question:
          "Which HTML element is used to define the title of a document?",
        description:
          "The `<title>` tag defines the title of the HTML document. The title appears in the browser's title bar or page tab. It is an essential element for SEO and user experience, but it is not displayed on the web page itself; it's part of the document's metadata.",
        options: [
          { id: "1", answer: "<head>" },
          { id: "2", answer: "<body>" },
          { id: "3", answer: "<title>" },
          { id: "4", answer: "<meta>" },
        ],
        correctAnswer: [{ id: "3", answer: "<title>" }],
      },
      {
        id: "5",
        question: "Which tag is used to embed an image in an HTML page?",
        description:
          "The `<img>` tag is used to embed an image into an HTML document. It is an empty tag, meaning it does not have a closing tag. The `src` attribute specifies the path to the image, and the `alt` attribute provides alternative text for accessibility.",
        options: [
          { id: "1", answer: "<image>" },
          { id: "2", answer: "<picture>" },
          { id: "3", answer: "<img>" },
          { id: "4", answer: "<graphic>" },
        ],
        correctAnswer: [{ id: "3", answer: "<img>" }],
      },
      {
        id: "6",
        question:
          "What is the correct HTML element for inserting a line break?",
        description:
          "The `<br>` tag is a single (empty) tag used to insert a line break. It does not require a closing tag. It's commonly used to force text onto a new line without creating a new paragraph.",
        options: [
          { id: "1", answer: "<lb>" },
          { id: "2", answer: "<break>" },
          { id: "3", answer: "<br>" },
          { id: "4", answer: "<newline>" },
        ],
        correctAnswer: [{ id: "3", answer: "<br>" }],
      },
      {
        id: "7",
        question:
          "Which HTML element is used to specify a footer for a document or section?",
        description:
          "The `<footer>` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about its containing element, such as authorship information, copyright data, or links to related documents.",
        options: [
          { id: "1", answer: "<bottom>" },
          { id: "2", answer: "<section>" },
          { id: "3", answer: "<foot>" },
          { id: "4", answer: "<footer>" },
        ],
        correctAnswer: [{ id: "4", answer: "<footer>" }],
      },
      {
        id: "8",
        question:
          "Which HTML element specifies self-contained content, like an article or blog post?",
        description:
          "The `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable. Examples include a forum post, a blog post, a user-submitted comment, or an interactive widget.",
        options: [
          { id: "1", answer: "<section>" },
          { id: "2", answer: "<main>" },
          { id: "3", answer: "<post>" },
          { id: "4", answer: "<article>" },
        ],
        correctAnswer: [{ id: "4", answer: "<article>" }],
      },
      {
        id: "9",
        question: "What is the correct HTML for adding a background color?",
        description:
          "While older HTML versions used the `bgcolor` attribute, the modern and recommended way to apply styles like background color is using CSS. You can do this inline using the `style` attribute, or preferably, via internal or external stylesheets.",
        options: [
          { id: "1", answer: "<body background='yellow'>" },
          { id: "2", answer: "<body style='background-color:yellow;'>" },
          { id: "3", answer: "<background>yellow</background>" },
          { id: "4", answer: "<body bg='yellow'>" },
        ],
        correctAnswer: [
          { id: "2", answer: "<body style='background-color:yellow;'>" },
        ],
      },
      {
        id: "10",
        question: "Which HTML tag is used for creating a hyperlink?",
        description:
          "The `<a>` tag, also known as the anchor tag, is used to create a hyperlink from one web page to another, or to a specific location within the same page. The destination is specified using the `href` attribute.",
        options: [
          { id: "1", answer: "<link>" },
          { id: "2", answer: "<hlink>" },
          { id: "3", answer: "<anchor>" },
          { id: "4", answer: "<a>" },
        ],
        correctAnswer: [{ id: "4", answer: "<a>" }],
      },
      {
        id: "11",
        question: "Which HTML element is used to define emphasized text?",
        description:
          "The `<em>` tag is used to define emphasized text. Browsers typically render this as italic text. It conveys semantic emphasis, indicating that the content within it should be stressed.",
        options: [
          { id: "1", answer: "<italic>" },
          { id: "2", answer: "<i>" },
          { id: "3", answer: "<emp>" },
          { id: "4", answer: "<em>" },
        ],
        correctAnswer: [{ id: "4", answer: "<em>" }],
      },
      {
        id: "12",
        question: "Which HTML element defines navigation links?",
        description:
          "The `<nav>` element represents a section of a page that contains navigation links, either to the current document or to other documents. Common examples are menus, tables of contents, and indexes.",
        options: [
          { id: "1", answer: "<navigation>" },
          { id: "2", answer: "<navigate>" },
          { id: "3", answer: "<nav>" },
          { id: "4", answer: "<links>" },
        ],
        correctAnswer: [{ id: "3", answer: "<nav>" }],
      },
      {
        id: "13",
        question: "What is the purpose of the `<head>` element in HTML?",
        description:
          "The `<head>` element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets. This content is not displayed on the webpage itself but is crucial for browser rendering, SEO, and other functionalities.",
        options: [
          { id: "1", answer: "To define the main content of the document" },
          { id: "2", answer: "To contain all visible page content" },
          { id: "3", answer: "To contain metadata about the HTML document" },
          { id: "4", answer: "To include header images and logos" },
        ],
        correctAnswer: [
          { id: "3", answer: "To contain metadata about the HTML document" },
        ],
      },
      {
        id: "14",
        question: "Which HTML element is used for the largest heading?",
        description:
          "HTML defines six levels of headings, from `<h1>` (the most important) to `<h6>` (the least important). `<h1>` is typically used for the main title of a page or section, indicating the highest level of hierarchy.",
        options: [
          { id: "1", answer: "<heading>" },
          { id: "2", answer: "<h6>" },
          { id: "3", answer: "<h1>" },
          { id: "4", answer: "<head>" },
        ],
        correctAnswer: [{ id: "3", answer: "<h1>" }],
      },
      {
        id: "15",
        question:
          "What is the purpose of the `alt` attribute in an `<img>` tag?",
        description:
          "The `alt` attribute specifies an alternate text for an image, if the image cannot be displayed (e.g., due to a broken link, slow connection, or if the user is using a screen reader). It is crucial for accessibility (A11y) and also benefits SEO.",
        options: [
          { id: "1", answer: "To set the image alignment" },
          { id: "2", answer: "To define the image's height" },
          { id: "3", answer: "To provide alternative text for the image" },
          { id: "4", answer: "To specify the image's title on hover" },
        ],
        correctAnswer: [
          { id: "3", answer: "To provide alternative text for the image" },
        ],
      },
      {
        id: "16",
        question: "Which HTML element is used to define a paragraph?",
        description:
          "The `<p>` tag is used to define a paragraph of text. Browsers automatically add some white space (margin) before and after a paragraph.",
        options: [
          { id: "1", answer: "<para>" },
          { id: "2", answer: "<text>" },
          { id: "3", answer: "<p>" },
          { id: "4", answer: "<paragraph>" },
        ],
        correctAnswer: [{ id: "3", answer: "<p>" }],
      },
      {
        id: "17",
        question: "How do you specify a comment in HTML?",
        description:
          "HTML comments are used to add notes to the source code that are not displayed in the browser. They start with ``. Comments are useful for explaining code, debugging, or temporarily disabling parts of the code.",
        options: [
          { id: "1", answer: "// This is a comment" },
          { id: "2", answer: "/* This is a comment */" },
          { id: "3", answer: "" },
          { id: "4", answer: "# This is a comment" },
        ],
        correctAnswer: [{ id: "3", answer: "" }],
      },
      {
        id: "18",
        question:
          "Which HTML5 element is used to draw graphics, on the fly, via scripting (usually JavaScript)?",
        description:
          "The `<canvas>` element in HTML5 is used to draw graphics on a web page using JavaScript. It provides an empty drawing surface that can be manipulated to create dynamic graphics, animations, and interactive visualizations.",
        options: [
          { id: "1", answer: "<svg>" },
          { id: "2", answer: "<draw>" },
          { id: "3", answer: "<graphics>" },
          { id: "4", answer: "<canvas>" },
        ],
        correctAnswer: [{ id: "4", answer: "<canvas>" }],
      },
      {
        id: "19",
        question: "Which HTML element is used to define important text?",
        description:
          "The `<strong>` tag is used to define important text. Browsers typically render this as bold text. Semantically, it indicates that the text has strong importance or seriousness.",
        options: [
          { id: "1", answer: "<bold>" },
          { id: "2", answer: "<b>" },
          { id: "3", answer: "<important>" },
          { id: "4", answer: "<strong>" },
        ],
        correctAnswer: [{ id: "4", answer: "<strong>" }],
      },
      {
        id: "20",
        question: "Which input type creates a single-line text input field?",
        description:
          "The `<input>` tag is used to create interactive controls for web-based forms. The `type='text'` attribute creates a basic single-line text input field for users to enter information.",
        options: [
          { id: "1", answer: "<input type='textarea'>" },
          { id: "2", answer: "<input type='text'>" },
          { id: "3", answer: "<input type='string'>" },
          { id: "4", answer: "<input type='line'>" },
        ],
        correctAnswer: [{ id: "2", answer: "<input type='text'>" }],
      },
      {
        id: "21",
        question: "What is the purpose of the `<meta>` tag?",
        description:
          "The `<meta>` tag provides metadata about the HTML document. Metadata is data about data. `<meta>` tags are used to specify page description, keywords, author of the document, last modified, and other metadata. They are placed inside the `<head>` element.",
        options: [
          { id: "1", answer: "To define a metronome for multimedia" },
          { id: "2", answer: "To link external CSS files" },
          { id: "3", answer: "To provide metadata about the HTML document" },
          { id: "4", answer: "To create a dynamic animation" },
        ],
        correctAnswer: [
          { id: "3", answer: "To provide metadata about the HTML document" },
        ],
      },
      {
        id: "22",
        question: "Which HTML element is used to play video files?",
        description:
          "The `<video>` element is used to embed video content in an HTML document. It supports various video formats and allows for controls like play, pause, volume, and full screen.",
        options: [
          { id: "1", answer: "<media>" },
          { id: "2", answer: "<movie>" },
          { id: "3", answer: "<video>" },
          { id: "4", answer: "<play>" },
        ],
        correctAnswer: [{ id: "3", answer: "<video>" }],
      },
      {
        id: "23",
        question: "Which HTML element is used to play audio files?",
        description:
          "The `<audio>` element is used to embed sound content in an HTML document. Similar to video, it supports various audio formats and offers controls for playback.",
        options: [
          { id: "1", answer: "<sound>" },
          { id: "2", answer: "<music>" },
          { id: "3", answer: "<mp3>" },
          { id: "4", answer: "<audio>" },
        ],
        correctAnswer: [{ id: "4", answer: "<audio>" }],
      },
      {
        id: "24",
        question:
          "What is the correct HTML for referring to an external style sheet?",
        description:
          "External style sheets are linked to an HTML document using the `<link>` tag within the `<head>` section. The `rel='stylesheet'` attribute indicates that it's a stylesheet, and the `href` attribute specifies the path to the CSS file.",
        options: [
          { id: "1", answer: "<style src='mystyle.css'>" },
          {
            id: "2",
            answer:
              "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
          },
          { id: "3", answer: "<stylesheet>mystyle.css</stylesheet>" },
          { id: "4", answer: "<css>mystyle.css</css>" },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
          },
        ],
      },
      {
        id: "25",
        question: "Which HTML tag is used to define a table?",
        description:
          "The `<table>` tag is used to create a table in HTML. Tables are structured data arranged in rows and columns, typically used for tabular data, not for page layout.",
        options: [
          { id: "1", answer: "<grid>" },
          { id: "2", answer: "<tbody>" },
          { id: "3", answer: "<table>" },
          { id: "4", answer: "<tab>" },
        ],
        correctAnswer: [{ id: "3", answer: "<table>" }],
      },
      {
        id: "26",
        question: "Which HTML tag is used to define a row in a table?",
        description:
          "Within a `<table>` element, `<tr>` (table row) defines a row of cells. Each cell within the row is then defined by `<td>` (table data) or `<th>` (table header) tags.",
        options: [
          { id: "1", answer: "<td>" },
          { id: "2", answer: "<th>" },
          { id: "3", answer: "<tr>" },
          { id: "4", answer: "<row>" },
        ],
        correctAnswer: [{ id: "3", answer: "<tr>" }],
      },
      {
        id: "27",
        question: "Which HTML tag is used to define a data cell in a table?",
        description:
          "The `<td>` (table data) tag defines a standard data cell in an HTML table. It holds the actual content of the table.",
        options: [
          { id: "1", answer: "<th>" },
          { id: "2", answer: "<tr>" },
          { id: "3", answer: "<data>" },
          { id: "4", answer: "<td>" },
        ],
        correctAnswer: [{ id: "4", answer: "<td>" }],
      },
      {
        id: "28",
        question: "What is the purpose of the `DOCTYPE` declaration?",
        description:
          "The `<!DOCTYPE html>` declaration is an instruction to the web browser about what version of HTML the page is written in. For HTML5, it's a simple `<!DOCTYPE html>`, which tells the browser to render the page in standards mode.",
        options: [
          { id: "1", answer: "To define a document type definition" },
          { id: "2", answer: "To link an external stylesheet" },
          { id: "3", answer: "To declare the HTML version being used" },
          { id: "4", answer: "To embed JavaScript code" },
        ],
        correctAnswer: [
          { id: "3", answer: "To declare the HTML version being used" },
        ],
      },
      {
        id: "29",
        question:
          "Which HTML element is used to group related elements in a form?",
        description:
          "The `<fieldset>` element is used to group related elements in a web form, providing structural organization. It typically draws a box around the grouped elements, and a `<legend>` element can be used within it to provide a caption for the group.",
        options: [
          { id: "1", answer: "<group>" },
          { id: "2", answer: "<formgroup>" },
          { id: "3", answer: "<fieldset>" },
          { id: "4", answer: "<section>" },
        ],
        correctAnswer: [{ id: "3", answer: "<fieldset>" }],
      },
      {
        id: "30",
        question:
          "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        description:
          "This question reiterates the importance of the `alt` attribute for accessibility. It provides a text alternative when the image cannot be seen, benefiting screen readers and improving SEO.",
        options: [
          { id: "1", answer: "src" },
          { id: "2", answer: "title" },
          { id: "3", answer: "alt" },
          { id: "4", answer: "longdesc" },
        ],
        correctAnswer: [{ id: "3", answer: "alt" }],
      },
      {
        id: "31",
        question: "Which HTML element is used to define a list item?",
        description:
          "The `<li>` (list item) tag is used to define items within both ordered lists (`<ol>`) and unordered lists (`<ul>`).",
        options: [
          { id: "1", answer: "<item>" },
          { id: "2", answer: "<listitem>" },
          { id: "3", answer: "<li>" },
          { id: "4", answer: "<entry>" },
        ],
        correctAnswer: [{ id: "3", answer: "<li>" }],
      },
      {
        id: "32",
        question:
          "Which HTML element is used to specify a caption for a `<figure>` element?",
        description:
          "The `<figcaption>` element is used to provide a caption or legend for the content of a `<figure>` element. The `<figure>` element itself is used for self-contained content, such as images, diagrams, code listings, etc.",
        options: [
          { id: "1", answer: "<captiontext>" },
          { id: "2", answer: "<figurecap>" },
          { id: "3", answer: "<caption for='figure'>" },
          { id: "4", answer: "<figcaption>" },
        ],
        correctAnswer: [{ id: "4", answer: "<figcaption>" }],
      },
      {
        id: "33",
        question: "Which HTML attribute makes an input field required?",
        description:
          "The `required` attribute is a boolean attribute. When present, it specifies that an input field must be filled out before submitting the form. This is a client-side validation feature.",
        options: [
          { id: "1", answer: "mustfill" },
          { id: "2", answer: "mandatory" },
          { id: "3", answer: "validate" },
          { id: "4", answer: "required" },
        ],
        correctAnswer: [{ id: "4", answer: "required" }],
      },
      {
        id: "34",
        question: "Which HTML element defines a section of a document?",
        description:
          "The `<section>` element is used to group related content, usually with a heading. Examples include chapters, introductions, news items, or contact information. It's a semantic element that helps structure the document.",
        options: [
          { id: "1", answer: "<group>" },
          { id: "2", answer: "<area>" },
          { id: "3", answer: "<division>" },
          { id: "4", answer: "<section>" },
        ],
        correctAnswer: [{ id: "4", answer: "<section>" }],
      },
      {
        id: "35",
        question:
          "Which HTML element provides a container for flow content or an HTML document fragment?",
        description:
          "The `<div>` element is a generic container for flow content. It has no semantic meaning but is very commonly used to group other elements together for styling with CSS or manipulating with JavaScript. It creates a block-level division.",
        options: [
          { id: "1", answer: "<container>" },
          { id: "2", answer: "<box>" },
          { id: "3", answer: "<span>" },
          { id: "4", answer: "<div>" },
        ],
        correctAnswer: [{ id: "4", answer: "<div>" }],
      },
      {
        id: "36",
        question:
          "Which HTML element is used to denote an independent piece of content, like a blog post or news article?",
        description:
          "The `<article>` element (as discussed in question 8) is specifically for self-contained, independent content that could theoretically be syndicated or reused independently of the rest of the page. This distinguishes it from `<section>` which is for thematic grouping within a document.",
        options: [
          { id: "1", answer: "<section>" },
          { id: "2", answer: "<main>" },
          { id: "3", answer: "<post>" },
          { id: "4", answer: "<article>" },
        ],
        correctAnswer: [{ id: "4", answer: "<article>" }],
      },
      {
        id: "37",
        question:
          "What is the purpose of the `target='_blank'` attribute in an `<a>` tag?",
        description:
          "When applied to an `<a>` tag, the `target='_blank'` attribute specifies that the linked document will open in a new browser window or tab. This is commonly used for external links so users don't navigate away from your site.",
        options: [
          { id: "1", answer: "To open the link in the same frame" },
          { id: "2", answer: "To open the link in a new window/tab" },
          { id: "3", answer: "To make the link downloadable" },
          {
            id: "4",
            answer: "To target a specific element on the current page",
          },
        ],
        correctAnswer: [
          { id: "2", answer: "To open the link in a new window/tab" },
        ],
      },
      {
        id: "38",
        question: "Which HTML tag is used to define an ordered list?",
        description:
          "An ordered list, where items are typically numbered, is created using the `<ol>` tag. Each list item within the `<ol>` must be enclosed in an `<li>` (list item) tag.",
        options: [
          { id: "1", answer: "<ul>" },
          { id: "2", answer: "<dl>" },
          { id: "3", answer: "<list>" },
          { id: "4", answer: "<ol>" },
        ],
        correctAnswer: [{ id: "4", answer: "<ol>" }],
      },
      {
        id: "39",
        question:
          "Which HTML element is used to mark text as no longer accurate or relevant?",
        description:
          "The `<del>` tag is used to represent a range of text that has been deleted from a document. Browsers typically render this with a strikethrough. It is often used in conjunction with `<ins>` for showing revisions.",
        options: [
          { id: "1", answer: "<strike>" },
          { id: "2", answer: "<s>" },
          { id: "3", answer: "<deleted>" },
          { id: "4", answer: "<del>" },
        ],
        correctAnswer: [{ id: "4", answer: "<del>" }],
      },
      {
        id: "40",
        question: "What is the correct HTML for creating a checkbox?",
        description:
          "The `<input>` tag with `type='checkbox'` creates a checkbox. Checkboxes allow users to select zero or more options from a predefined set.",
        options: [
          { id: "1", answer: "<input type='check'>" },
          { id: "2", answer: "<checkbox>" },
          { id: "3", answer: "<input type='box'>" },
          { id: "4", answer: "<input type='checkbox'>" },
        ],
        correctAnswer: [{ id: "4", answer: "<input type='checkbox'>" }],
      },
      {
        id: "41",
        question:
          "Which HTML element is used to define a client-side image map?",
        description:
          "An image map is an image with clickable areas. The `<map>` tag is used in conjunction with the `usemap` attribute of the `<img>` tag to define client-side image maps. Inside `<map>`, `<area>` tags define the clickable regions.",
        options: [
          { id: "1", answer: "<imagemap>" },
          { id: "2", answer: "<area>" },
          { id: "3", answer: "<map>" },
          { id: "4", answer: "<picmap>" },
        ],
        correctAnswer: [{ id: "3", answer: "<map>" }],
      },
      {
        id: "42",
        question: "What is the purpose of the `<form>` tag?",
        description:
          "The `<form>` tag is used to create an HTML form for user input. It acts as a container for various form elements like input fields, checkboxes, radio buttons, submit buttons, etc., and defines how the data is sent to the server (e.g., using `action` and `method` attributes).",
        options: [
          { id: "1", answer: "To define a document section" },
          { id: "2", answer: "To group navigation links" },
          { id: "3", answer: "To create an HTML form for user input" },
          { id: "4", answer: "To display dynamic content from a database" },
        ],
        correctAnswer: [
          { id: "3", answer: "To create an HTML form for user input" },
        ],
      },
      {
        id: "43",
        question:
          "Which HTML input type is used for sensitive information like passwords?",
        description:
          "The `<input>` tag with `type='password'` creates a single-line text input field where the characters typed by the user are masked (e.g., with asterisks or dots). This is for user privacy and security during input.",
        options: [
          { id: "1", answer: "<input type='text' secret>" },
          { id: "2", answer: "<input type='hidden'>" },
          { id: "3", answer: "<input type='secure'>" },
          { id: "4", answer: "<input type='password'>" },
        ],
        correctAnswer: [{ id: "4", answer: "<input type='password'>" }],
      },
      {
        id: "44",
        question: "Which HTML element specifies preformatted text?",
        description:
          "The `<pre>` (preformatted text) tag defines preformatted text. Text within this element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks exactly as they are written in the source code. This is often used for displaying code snippets.",
        options: [
          { id: "1", answer: "<p-format>" },
          { id: "2", answer: "<format>" },
          { id: "3", answer: "<textformat>" },
          { id: "4", answer: "<pre>" },
        ],
        correctAnswer: [{ id: "4", answer: "<pre>" }],
      },
      {
        id: "45",
        question:
          "Which HTML attribute specifies that an input field should be disabled?",
        description:
          "The `disabled` attribute is a boolean attribute. When present, it specifies that the input field should be disabled. A disabled input field is unusable and un-clickable. It is not submitted with the form.",
        options: [
          { id: "1", answer: "inactive" },
          { id: "2", answer: "locked" },
          { id: "3", answer: "disabled" },
          { id: "4", answer: "readonly" },
        ],
        correctAnswer: [{ id: "3", answer: "disabled" }],
      },
      {
        id: "46",
        question:
          "What is the purpose of the `placeholder` attribute in an input field?",
        description:
          "The `placeholder` attribute provides a hint to the user about what kind of information is expected in the input field. This hint is displayed in the input field before the user enters a value and disappears when the input field gets focus.",
        options: [
          { id: "1", answer: "To set a default value for the input" },
          { id: "2", answer: "To make the input field read-only" },
          {
            id: "3",
            answer:
              "To provide a short hint to the user about the expected value",
          },
          { id: "4", answer: "To define the name of the input field" },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To provide a short hint to the user about the expected value",
          },
        ],
      },
      {
        id: "47",
        question: "Which HTML element is used to define a block quotation?",
        description:
          "The `<blockquote>` element is used to indicate that the enclosed text is an extended quotation. Browsers typically indent `<blockquote>` elements.",
        options: [
          { id: "1", answer: "<quote>" },
          { id: "2", answer: "<citation>" },
          { id: "3", answer: "<blockquote>" },
          { id: "4", answer: "<q>" },
        ],
        correctAnswer: [{ id: "3", answer: "<blockquote>" }],
      },
      {
        id: "48",
        question:
          "Which HTML element defines a term/name in a description list?",
        description:
          "In a description list (`<dl>`), the `<dt>` (description term) element defines a term or name. It is typically followed by one or more `<dd>` (description description) elements that provide the definition or description of the term.",
        options: [
          { id: "1", answer: "<item>" },
          { id: "2", answer: "<term>" },
          { id: "3", answer: "<dlterm>" },
          { id: "4", answer: "<dt>" },
        ],
        correctAnswer: [{ id: "4", answer: "<dt>" }],
      },
      {
        id: "49",
        question:
          "Which HTML element defines the description of a term/name in a description list?",
        description:
          "Following a `<dt>` (description term) in a description list (`<dl>`), the `<dd>` (description description) element defines the description or definition for the preceding term.",
        options: [
          { id: "1", answer: "<description>" },
          { id: "2", answer: "<desc>" },
          { id: "3", answer: "<dd>" },
          { id: "4", answer: "<dldesc>" },
        ],
        correctAnswer: [{ id: "3", answer: "<dd>" }],
      },
      {
        id: "50",
        question:
          "Which HTML attribute specifies the text direction of the element's content?",
        description:
          "The `dir` attribute specifies the text direction of the element's content. Common values are `ltr` (left-to-right, default) and `rtl` (right-to-left) for languages like Arabic or Hebrew.",
        options: [
          { id: "1", answer: "align" },
          { id: "2", answer: "direction" },
          { id: "3", answer: "text-align" },
          { id: "4", answer: "dir" },
        ],
        correctAnswer: [{ id: "4", answer: "dir" }],
      },
    ],
  },
  {
    id: "2",
    title: "CSS (Cascading Style Sheets)",
    description:
      "Language used for describing the presentation of a document written in a markup language like HTML.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What does CSS stand for?",
        description:
          "CSS is an acronym for Cascading Style Sheets. It is a stylesheet language used for describing the presentation of a document written in a markup language like HTML.",
        options: [
          { id: "1", answer: "Creative Style Sheets" },
          { id: "2", answer: "Computer Style Sheets" },
          { id: "3", answer: "Cascading Style Sheets" },
          { id: "4", answer: "Colorful Style Sheets" },
        ],
        correctAnswer: [{ id: "3", answer: "Cascading Style Sheets" }],
      },
      {
        id: "2",
        question: "Which HTML tag is used to link an external style sheet?",
        description:
          "The `<link>` tag is used to link an external style sheet to an HTML document. It is placed inside the `<head>` section of the HTML. The `rel` attribute specifies the relationship between the current document and the linked document (e.g., 'stylesheet'), and `href` specifies the URL of the stylesheet.",
        options: [
          { id: "1", answer: "<script>" },
          { id: "2", answer: "<style>" },
          { id: "3", answer: "<link>" },
          { id: "4", answer: "<css>" },
        ],
        correctAnswer: [{ id: "3", answer: "<link>" }],
      },
      {
        id: "3",
        question:
          "Where in an HTML document is the correct place to refer to an external style sheet?",
        description:
          "External stylesheets are referenced within the `<head>` section of an HTML document. This ensures that the styles are loaded and applied before the content of the `<body>` is rendered.",
        options: [
          { id: "1", answer: "In the <body> section" },
          { id: "2", answer: "In the <head> section" },
          { id: "3", answer: "At the end of the document" },
          { id: "4", answer: "Before the <html> tag" },
        ],
        correctAnswer: [{ id: "2", answer: "In the <head> section" }],
      },
      {
        id: "4",
        question: "Which CSS property controls the text size?",
        description:
          "The `font-size` property in CSS is used to control the size of the text within an element. It can be specified in various units like pixels (px), ems (em), rems (rem), or percentages.",
        options: [
          { id: "1", answer: "text-style" },
          { id: "2", answer: "text-size" },
          { id: "3", answer: "font-size" },
          { id: "4", answer: "font-style" },
        ],
        correctAnswer: [{ id: "3", answer: "font-size" }],
      },
      {
        id: "5",
        question: "How do you add a background color for all <h1> elements?",
        description:
          "To apply a background color specifically to all `<h1>` elements, you use an element selector in CSS. The `background-color` property is then set to the desired color value.",
        options: [
          { id: "1", answer: "all.h1 {background-color: #FFFFFF;}" },
          { id: "2", answer: "h1.all {background-color: #FFFFFF;}" },
          { id: "3", answer: "h1 {background-color: #FFFFFF;}" },
          { id: "4", answer: "h1 {bg-color: #FFFFFF;}" },
        ],
        correctAnswer: [{ id: "3", answer: "h1 {background-color: #FFFFFF;}" }],
      },
      {
        id: "6",
        question: "Which CSS property is used to change the text color?",
        description:
          "The `color` property in CSS is used to set the foreground color of an element's text content. This can be specified using color names, HEX codes, RGB, RGBA, HSL, or HSLA values.",
        options: [
          { id: "1", answer: "text-color" },
          { id: "2", answer: "font-color" },
          { id: "3", answer: "color" },
          { id: "4", answer: "fgcolor" },
        ],
        correctAnswer: [{ id: "3", answer: "color" }],
      },
      {
        id: "7",
        question:
          "Which CSS property is used to change the font of an element?",
        description:
          "The `font-family` property is used to specify the typeface for the text. You can list multiple font names as a 'fallback' system, where the browser will try the first font, then the second, and so on, if the previous ones are unavailable.",
        options: [
          { id: "1", answer: "font-name" },
          { id: "2", answer: "font-family" },
          { id: "3", answer: "font-type" },
          { id: "4", answer: "font-style" },
        ],
        correctAnswer: [{ id: "2", answer: "font-family" }],
      },
      {
        id: "8",
        question: "How do you make the text bold?",
        description:
          "The `font-weight` property sets the weight (or boldness) of the font. Common values include 'normal', 'bold', 'bolder', 'lighter', or numeric values (100-900).",
        options: [
          { id: "1", answer: "font: bold;" },
          { id: "2", answer: "style: bold;" },
          { id: "3", answer: "font-weight: bold;" },
          { id: "4", answer: "text-decoration: bold;" },
        ],
        correctAnswer: [{ id: "3", answer: "font-weight: bold;" }],
      },
      {
        id: "9",
        question:
          "How do you display a border like this: top: 10px, right: 5px, bottom: 15px, left: 20px?",
        description:
          "The `border-width` property can accept up to four values to specify the width of the top, right, bottom, and left borders respectively, in clockwise order.",
        options: [
          { id: "1", answer: "border-width: 10px 20px 15px 5px;" },
          { id: "2", answer: "border-width: 10px 5px 15px 20px;" },
          { id: "3", answer: "border-width: 20px 15px 5px 10px;" },
          { id: "4", answer: "border-width: 5px 10px 15px 20px;" },
        ],
        correctAnswer: [
          { id: "2", answer: "border-width: 10px 5px 15px 20px;" },
        ],
      },
      {
        id: "10",
        question:
          "Which property is used to change the left padding of an element?",
        description:
          "The `padding-left` property sets the padding space required on the left side of an element. Padding is the space between the element's content and its border.",
        options: [
          { id: "1", answer: "padding-left" },
          { id: "2", answer: "margin-left" },
          { id: "3", answer: "left-padding" },
          { id: "4", answer: "pad-left" },
        ],
        correctAnswer: [{ id: "1", answer: "padding-left" }],
      },
      {
        id: "11",
        question:
          "When using the `padding` property with four values (e.g., `padding: 10px 20px 30px 40px;`), what order do the values represent?",
        description:
          "When the `padding` shorthand property receives four values, they are applied in a specific clockwise order: top, right, bottom, left.",
        options: [
          { id: "1", answer: "Top, Bottom, Left, Right" },
          { id: "2", answer: "Left, Right, Top, Bottom" },
          { id: "3", answer: "Top, Right, Bottom, Left" },
          { id: "4", answer: "Right, Left, Top, Bottom" },
        ],
        correctAnswer: [{ id: "3", answer: "Top, Right, Bottom, Left" }],
      },
      {
        id: "12",
        question:
          "Which property is used to change the right margin of an element?",
        description:
          "The `margin-right` property sets the margin space required on the right side of an element. Margin is the space outside the border of an element.",
        options: [
          { id: "1", answer: "margin-right" },
          { id: "2", answer: "padding-right" },
          { id: "3", answer: "right-margin" },
          { id: "4", answer: "space-right" },
        ],
        correctAnswer: [{ id: "1", answer: "margin-right" }],
      },
      {
        id: "13",
        question:
          "How do you make a list of items display horizontally instead of vertically?",
        description:
          "By default, list items (`<li>`) are block-level elements and stack vertically. To make them display horizontally, you can change their `display` property to `inline` or `inline-block`. Using `flex` on the parent container (`<ul>`) is also a very common and flexible way to achieve horizontal alignment.",
        options: [
          { id: "1", answer: "list-style: horizontal;" },
          { id: "2", answer: "display: horizontal;" },
          { id: "3", answer: "display: inline; or display: inline-block;" },
          { id: "4", answer: "flex-direction: row;" },
        ],
        correctAnswer: [
          { id: "3", answer: "display: inline; or display: inline-block;" },
        ],
      },
      {
        id: "14",
        question:
          "Which property specifies the type of cursor to be displayed when hovering over an element?",
        description:
          "The `cursor` property specifies the mouse cursor to be displayed when the pointer is over an element. It can take values like 'pointer' (for hand icon), 'text', 'wait', 'crosshair', etc.",
        options: [
          { id: "1", answer: "mouse-pointer" },
          { id: "2", answer: "hover-cursor" },
          { id: "3", answer: "cursor" },
          { id: "4", answer: "pointer" },
        ],
        correctAnswer: [{ id: "3", answer: "cursor" }],
      },
      {
        id: "15",
        question:
          "Which CSS property is used for controlling the spacing between characters?",
        description:
          "The `letter-spacing` property is used to specify the space between characters in a text. It can take positive or negative values.",
        options: [
          { id: "1", answer: "character-spacing" },
          { id: "2", answer: "text-spacing" },
          { id: "3", answer: "letter-spacing" },
          { id: "4", answer: "word-spacing" },
        ],
        correctAnswer: [{ id: "3", answer: "letter-spacing" }],
      },
      {
        id: "16",
        question:
          "Which property allows you to control the space between lines of text?",
        description:
          "The `line-height` property sets the height of a line box. It defines the minimum height of line boxes within the element and is often used to control the vertical spacing between lines of text.",
        options: [
          { id: "1", answer: "text-height" },
          { id: "2", answer: "line-spacing" },
          { id: "3", answer: "row-height" },
          { id: "4", answer: "line-height" },
        ],
        correctAnswer: [{ id: "4", answer: "line-height" }],
      },
      {
        id: "17",
        question:
          "What is the correct CSS syntax for making all `<p>` elements red?",
        description:
          "To select all `<p>` elements and apply a red color, you use the element selector `p` and set the `color` property to `red` within the curly braces.",
        options: [
          { id: "1", answer: "p.all {color: red;}" },
          { id: "2", answer: "p {color: red;}" },
          { id: "3", answer: "<p style='color:red;'>" },
          { id: "4", answer: "all p {color: red;}" },
        ],
        correctAnswer: [{ id: "2", answer: "p {color: red;}" }],
      },
      {
        id: "18",
        question: "How do you select an element with `id='demo'`?",
        description:
          "In CSS, an ID selector is used to select a unique element. It is prefixed with a hash symbol (`#`). Since IDs must be unique within an HTML document, an ID selector will select at most one element.",
        options: [
          { id: "1", answer: ".demo" },
          { id: "2", answer: "demo" },
          { id: "3", answer: "#demo" },
          { id: "4", answer: "*demo" },
        ],
        correctAnswer: [{ id: "3", answer: "#demo" }],
      },
      {
        id: "19",
        question: "How do you select elements with `class='test'`?",
        description:
          "In CSS, a class selector is used to select elements with a specific class attribute. It is prefixed with a dot (`.`). Multiple elements can share the same class.",
        options: [
          { id: "1", answer: "#test" },
          { id: "2", answer: "test" },
          { id: "3", answer: ".test" },
          { id: "4", answer: "*test" },
        ],
        correctAnswer: [{ id: "3", answer: ".test" }],
      },
      {
        id: "20",
        question: "Which CSS property is used to make text italic?",
        description:
          "The `font-style` property is used to specify the font style for text. The value 'italic' is used to render text in an italic font. The 'oblique' value is similar but typically a sloped version of the regular font, not necessarily a true italic.",
        options: [
          { id: "1", answer: "text-decoration: italic;" },
          { id: "2", answer: "font-style: italic;" },
          { id: "3", answer: "font-variant: italic;" },
          { id: "4", answer: "italic: true;" },
        ],
        correctAnswer: [{ id: "2", answer: "font-style: italic;" }],
      },
      {
        id: "21",
        question:
          "Which property specifies the order of a flexible item inside a flex container?",
        description:
          "The `order` property specifies the order of a flexible item relative to the rest of the flexible items inside the same container. Items are arranged according to their `order` value, with lower values coming before higher values.",
        options: [
          { id: "1", answer: "flex-order" },
          { id: "2", answer: "sort-order" },
          { id: "3", answer: "order" },
          { id: "4", answer: "align-order" },
        ],
        correctAnswer: [{ id: "3", answer: "order" }],
      },
      {
        id: "22",
        question:
          "Which CSS property is used to set the background image of an element?",
        description:
          "The `background-image` property sets one or more background images for an element. The URL of the image is specified using the `url()` function.",
        options: [
          { id: "1", answer: "image-background" },
          { id: "2", answer: "background-pic" },
          { id: "3", answer: "background-image" },
          { id: "4", answer: "bg-image" },
        ],
        correctAnswer: [{ id: "3", answer: "background-image" }],
      },
      {
        id: "23",
        question: "How do you specify a comment in CSS?",
        description:
          "CSS comments are used to add notes to the stylesheet source code. They start with `/*` and end with `*/`. Comments are ignored by the browser and are useful for documentation or debugging.",
        options: [
          { id: "1", answer: "// comment" },
          { id: "2", answer: "/* comment */" },
          { id: "3", answer: "" },
          { id: "4", answer: "# comment" },
        ],
        correctAnswer: [{ id: "2", answer: "/* comment */" }],
      },
      {
        id: "24",
        question: "Which CSS property controls the visibility of an element?",
        description:
          "The `visibility` property can show or hide an element without affecting the layout of the document. If set to `hidden`, the element is invisible, but it still occupies its space. In contrast, `display: none;` removes the element entirely from the document flow.",
        options: [
          { id: "1", answer: "display" },
          { id: "2", answer: "opacity" },
          { id: "3", answer: "visible" },
          { id: "4", answer: "visibility" },
        ],
        correctAnswer: [{ id: "4", answer: "visibility" }],
      },
      {
        id: "25",
        question:
          "Which CSS property is used to set the indentation of the first line of a text block?",
        description:
          "The `text-indent` property specifies the indentation of the first line of text in a block-level element. It can take positive values (indent) or negative values (outdent).",
        options: [
          { id: "1", answer: "text-align" },
          { id: "2", answer: "first-line-indent" },
          { id: "3", answer: "indent" },
          { id: "4", answer: "text-indent" },
        ],
        correctAnswer: [{ id: "4", answer: "text-indent" }],
      },
      {
        id: "26",
        question:
          "Which CSS property specifies the type of box an element generates?",
        description:
          "The `display` property specifies the display behavior (the rendering layout) of an element. Common values include `block`, `inline`, `inline-block`, `flex`, `grid`, and `none`.",
        options: [
          { id: "1", answer: "layout" },
          { id: "2", answer: "box-type" },
          { id: "3", answer: "render" },
          { id: "4", answer: "display" },
        ],
        correctAnswer: [{ id: "4", answer: "display" }],
      },
      {
        id: "27",
        question:
          "Which unit of measurement in CSS is relative to the font-size of the element's parent?",
        description:
          "The `em` unit is a relative unit that is equal to the computed `font-size` of the element on which it is used. If used on `font-size` itself, it's relative to the parent's `font-size`.",
        options: [
          { id: "1", answer: "px" },
          { id: "2", answer: "rem" },
          { id: "3", answer: "em" },
          { id: "4", answer: "pt" },
        ],
        correctAnswer: [{ id: "3", answer: "em" }],
      },
      {
        id: "28",
        question:
          "Which unit of measurement in CSS is relative to the root `html` element's font-size?",
        description:
          "The `rem` (root em) unit is a relative unit that is equal to the computed `font-size` of the root element (i.e., the `<html>` element). This makes it useful for consistent scaling across a website.",
        options: [
          { id: "1", answer: "em" },
          { id: "2", answer: "px" },
          { id: "3", answer: "rem" },
          { id: "4", answer: "vw" },
        ],
        correctAnswer: [{ id: "3", answer: "rem" }],
      },
      {
        id: "29",
        question:
          "Which CSS property specifies the transparency of an element?",
        description:
          "The `opacity` property sets the opacity level for an element. The opacity level describes the transparency of the element, where 1 is fully opaque and 0 is fully transparent.",
        options: [
          { id: "1", answer: "transparent" },
          { id: "2", answer: "alpha" },
          { id: "3", answer: "visibility" },
          { id: "4", answer: "opacity" },
        ],
        correctAnswer: [{ id: "4", answer: "opacity" }],
      },
      {
        id: "30",
        question:
          "Which property is used to create space around elements, outside of any defined borders?",
        description:
          "The `margin` property is used to create space around elements, outside of any defined borders. It provides spacing between elements and can collapse between block-level elements.",
        options: [
          { id: "1", answer: "padding" },
          { id: "2", answer: "spacing" },
          { id: "3", answer: "border" },
          { id: "4", answer: "margin" },
        ],
        correctAnswer: [{ id: "4", answer: "margin" }],
      },
      {
        id: "31",
        question:
          "Which CSS property is used to specify the width of an element's border?",
        description:
          "The `border-width` property sets the width of the four borders of an element. It can be specified with one, two, three, or four values, or with keywords like 'thin', 'medium', 'thick'.",
        options: [
          { id: "1", answer: "border-size" },
          { id: "2", answer: "border-thickness" },
          { id: "3", answer: "border-width" },
          { id: "4", answer: "border-style" },
        ],
        correctAnswer: [{ id: "3", answer: "border-width" }],
      },
      {
        id: "32",
        question:
          "Which CSS property is used to specify the style of an element's border?",
        description:
          "The `border-style` property sets the style of the four borders of an element. Common values include `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`, and `none`.",
        options: [
          { id: "1", answer: "border-type" },
          { id: "2", answer: "border-decoration" },
          { id: "3", answer: "border-style" },
          { id: "4", answer: "border-variant" },
        ],
        correctAnswer: [{ id: "3", answer: "border-style" }],
      },
      {
        id: "33",
        question:
          "Which CSS property is used to specify the color of an element's border?",
        description:
          "The `border-color` property sets the color of the four borders of an element. It can be specified with one, two, three, or four color values.",
        options: [
          { id: "1", answer: "border-color" },
          { id: "2", answer: "border-fill" },
          { id: "3", answer: "color-border" },
          { id: "4", answer: "border-paint" },
        ],
        correctAnswer: [{ id: "1", answer: "border-color" }],
      },
      {
        id: "34",
        question:
          "Which value of the `position` property removes an element from the document flow?",
        description:
          "The `position` property defines how an element is positioned in a document. A value of `absolute` positions an element relative to its nearest positioned ancestor (instead of relative to the viewport, like `fixed`). It takes the element out of the normal document flow.",
        options: [
          { id: "1", answer: "relative" },
          { id: "2", answer: "fixed" },
          { id: "3", answer: "static" },
          { id: "4", answer: "absolute" },
        ],
        correctAnswer: [{ id: "4", answer: "absolute" }],
      },
      {
        id: "35",
        question:
          "Which value of the `position` property positions an element relative to its normal position?",
        description:
          "The `relative` value of the `position` property positions an element relative to its original position. It remains in the normal document flow, and its new position is based on the `top`, `right`, `bottom`, and `left` properties.",
        options: [
          { id: "1", answer: "absolute" },
          { id: "2", answer: "fixed" },
          { id: "3", answer: "relative" },
          { id: "4", answer: "static" },
        ],
        correctAnswer: [{ id: "3", answer: "relative" }],
      },
      {
        id: "36",
        question:
          "Which value of the `position` property positions an element relative to the viewport?",
        description:
          "The `fixed` value of the `position` property positions an element relative to the viewport. This means it always stays in the same place even if the page is scrolled. Top, right, bottom, and left properties are used to set its position.",
        options: [
          { id: "1", answer: "relative" },
          { id: "2", answer: "static" },
          { id: "3", answer: "fixed" },
          { id: "4", answer: "sticky" },
        ],
        correctAnswer: [{ id: "3", answer: "fixed" }],
      },
      {
        id: "37",
        question: "What is the default value of the `position` property?",
        description:
          "The `static` value is the default positioning for HTML elements. Static-positioned elements are not affected by the `top`, `bottom`, `left`, and `right` properties. They are positioned according to the normal flow of the page.",
        options: [
          { id: "1", answer: "relative" },
          { id: "2", answer: "fixed" },
          { id: "3", answer: "absolute" },
          { id: "4", answer: "static" },
        ],
        correctAnswer: [{ id: "4", answer: "static" }],
      },
      {
        id: "38",
        question:
          "Which CSS property is used to specify the stacking order of positioned elements?",
        description:
          "The `z-index` property specifies the stack order of an element that is positioned (i.e., its `position` property is not `static`). An element with a greater `z-index` value is placed in front of an element with a lower `z-index` value.",
        options: [
          { id: "1", answer: "layer-index" },
          { id: "2", answer: "order-index" },
          { id: "3", answer: "z-index" },
          { id: "4", answer: "stack-order" },
        ],
        correctAnswer: [{ id: "3", answer: "z-index" }],
      },
      {
        id: "39",
        question:
          "Which CSS property is used to hide the overflow content of an element?",
        description:
          "The `overflow` property controls what happens to content that is too big to fit into an element's box. Setting it to `hidden` clips the content, and the rest of the content is invisible.",
        options: [
          { id: "1", answer: "clip" },
          { id: "2", answer: "visibility" },
          { id: "3", answer: "overflow" },
          { id: "4", answer: "crop" },
        ],
        correctAnswer: [{ id: "3", answer: "overflow" }],
      },
      {
        id: "40",
        question:
          "Which CSS property is used to change the writing direction of text?",
        description:
          "The `direction` property sets the text direction. It is often used in conjunction with the `unicode-bidi` property to support bidirectional text (e.g., for right-to-left languages).",
        options: [
          { id: "1", answer: "text-direction" },
          { id: "2", answer: "direction" },
          { id: "3", answer: "write-mode" },
          { id: "4", answer: "text-orientation" },
        ],
        correctAnswer: [{ id: "2", answer: "direction" }],
      },
      {
        id: "41",
        question:
          "Which property allows you to put a shadow around an element?",
        description:
          "The `box-shadow` property applies one or more shadows to an element's box. It can be used to create inner shadows, drop shadows, and more complex shadow effects.",
        options: [
          { id: "1", answer: "element-shadow" },
          { id: "2", answer: "shadow" },
          { id: "3", answer: "box-shadow" },
          { id: "4", answer: "drop-shadow" },
        ],
        correctAnswer: [{ id: "3", answer: "box-shadow" }],
      },
      {
        id: "42",
        question:
          "Which CSS property is used to round the corners of an element?",
        description:
          "The `border-radius` property is used to add rounded corners to an element's border. It can take one to four values to control the curvature of each corner.",
        options: [
          { id: "1", answer: "corner-radius" },
          { id: "2", answer: "round-corners" },
          { id: "3", answer: "border-corner" },
          { id: "4", answer: "border-radius" },
        ],
        correctAnswer: [{ id: "4", answer: "border-radius" }],
      },
      {
        id: "43",
        question: "What is the purpose of a CSS Media Query?",
        description:
          "Media queries are a CSS3 module that allows content to adapt to different conditions (e.g., screen size, resolution, orientation). They are essential for creating responsive web designs that look good on various devices.",
        options: [
          { id: "1", answer: "To define media files like images and videos" },
          { id: "2", answer: "To query a database for media content" },
          {
            id: "3",
            answer: "To apply different styles based on device characteristics",
          },
          { id: "4", answer: "To include external JavaScript files" },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To apply different styles based on device characteristics",
          },
        ],
      },
      {
        id: "44",
        question:
          "Which CSS pseudo-class is used to select an element when a user mouses over it?",
        description:
          "The `:hover` pseudo-class is used to select elements when the user's mouse pointer is over them. It's commonly used for interactive effects like changing button colors or showing hidden content on hover.",
        options: [
          { id: "1", answer: ":active" },
          { id: "2", answer: ":focus" },
          { id: "3", answer: ":mouseover" },
          { id: "4", answer: ":hover" },
        ],
        correctAnswer: [{ id: "4", answer: ":hover" }],
      },
      {
        id: "45",
        question:
          "Which CSS pseudo-class is used to select every `<p>` element that is the first child of its parent?",
        description:
          "The `:first-child` pseudo-class matches an element that is the first child of its parent. When combined with an element selector (e.g., `p:first-child`), it selects the specific element type if it is the first child.",
        options: [
          { id: "1", answer: "p:first" },
          { id: "2", answer: "p::first-child" },
          { id: "3", answer: "p:nth-child(1)" },
          { id: "4", answer: "p:first-child" },
        ],
        correctAnswer: [{ id: "4", answer: "p:first-child" }],
      },
      {
        id: "46",
        question: "What does the `box-sizing: border-box;` property do?",
        description:
          "By default, the `width` and `height` properties in CSS define the width and height of the content area only. `box-sizing: border-box;` changes this. It makes the `width` and `height` properties include the padding and border, but not the margin, in the total element size.",
        options: [
          { id: "1", answer: "It makes the box a border." },
          {
            id: "2",
            answer:
              "It includes padding and border in the element's total width/height.",
          },
          { id: "3", answer: "It removes the border from the box." },
          { id: "4", answer: "It makes the box a circle." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "It includes padding and border in the element's total width/height.",
          },
        ],
      },
      {
        id: "47",
        question: "Which CSS property is used to align text horizontally?",
        description:
          "The `text-align` property specifies the horizontal alignment of the inline content of a block element or table-cell box. Common values include `left`, `right`, `center`, and `justify`.",
        options: [
          { id: "1", answer: "align-text" },
          { id: "2", answer: "text-align" },
          { id: "3", answer: "horizontal-align" },
          { id: "4", answer: "text-position" },
        ],
        correctAnswer: [{ id: "2", answer: "text-align" }],
      },
      {
        id: "48",
        question:
          "Which property is used to specify the minimum width of an element?",
        description:
          "The `min-width` property sets the minimum width of an element. This prevents the element from becoming narrower than a specified value, even when the browser window is resized.",
        options: [
          { id: "1", answer: "width-min" },
          { id: "2", answer: "min-size" },
          { id: "3", answer: "min-width" },
          { id: "4", answer: "minimum-width" },
        ],
        correctAnswer: [{ id: "3", answer: "min-width" }],
      },
      {
        id: "49",
        question:
          "Which CSS property specifies how flex items are placed in the flex container, defining the main axis and the direction (normal or reversed)?",
        description:
          "The `flex-direction` property establishes the main-axis, thus defining the direction for flex items to be placed in the flex container. Values include `row` (default, left to right), `row-reverse`, `column` (top to bottom), and `column-reverse`.",
        options: [
          { id: "1", answer: "flex-wrap" },
          { id: "2", answer: "justify-content" },
          { id: "3", answer: "align-items" },
          { id: "4", answer: "flex-direction" },
        ],
        correctAnswer: [{ id: "4", answer: "flex-direction" }],
      },
      {
        id: "50",
        question:
          "Which CSS property adds decoration to text, such as underline, overline, or line-through?",
        description:
          "The `text-decoration` property is used to set or remove decorations from text. Common values are `none`, `underline`, `overline`, and `line-through`.",
        options: [
          { id: "1", answer: "font-decoration" },
          { id: "2", answer: "text-style" },
          { id: "3", answer: "text-effect" },
          { id: "4", answer: "text-decoration" },
        ],
        correctAnswer: [{ id: "4", answer: "text-decoration" }],
      },
    ],
  },
  {
    id: "3",
    title: "JavaScript (Core Concepts)",
    description:
      "A high-level, often just-in-time compiled language that conforms to the ECMAScript standard, primarily known for web browser interaction but also used on servers (Node.js) and other environments.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question:
          "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
        description:
          "In JavaScript, variables can be declared using 'var', 'let', and 'const'. The 'const' keyword is used to declare a constant variable, meaning its value cannot be reassigned after its initial declaration. 'let' allows reassignment but has block scope, while 'var' has function scope and can be reassigned.",
        options: [
          { id: "1", answer: "var" },
          { id: "2", answer: "let" },
          { id: "3", answer: "const" },
          { id: "4", answer: "static" },
        ],
        correctAnswer: [{ id: "3", answer: "const" }],
      },
      {
        id: "2",
        question: "Which operator is used to assign a value to a variable?",
        description:
          "The assignment operator `=` is used to assign a value to a variable. For example, `let x = 10;` assigns the value 10 to the variable x.",
        options: [
          { id: "1", answer: "==" },
          { id: "2", answer: "===" },
          { id: "3", answer: "=" },
          { id: "4", answer: "!=" },
        ],
        correctAnswer: [{ id: "3", answer: "=" }],
      },
      {
        id: "3",
        question: "How do you declare a function in JavaScript?",
        description:
          "A function in JavaScript can be declared using the `function` keyword, followed by the function name, a list of parameters in parentheses, and the function body enclosed in curly braces.",
        options: [
          { id: "1", answer: "def myFunction()" },
          { id: "2", answer: "function = myFunction()" },
          { id: "3", answer: "function myFunction()" },
          { id: "4", answer: "declare function myFunction()" },
        ],
        correctAnswer: [{ id: "3", answer: "function myFunction()" }],
      },
      {
        id: "4",
        question: "How do you write 'Hello World' in an alert box?",
        description:
          "The `alert()` function is a global browser object method that displays an alert box with a specified message and an OK button.",
        options: [
          { id: "1", answer: "msgBox('Hello World');" },
          { id: "2", answer: "alertBox('Hello World');" },
          { id: "3", answer: "alert('Hello World');" },
          { id: "4", answer: "confirm('Hello World');" },
        ],
        correctAnswer: [{ id: "3", answer: "alert('Hello World');" }],
      },
      {
        id: "5",
        question:
          "What is the correct way to write an IF statement in JavaScript?",
        description:
          "An `if` statement executes a block of code if a specified condition is true. The condition is placed in parentheses, and the code block is in curly braces.",
        options: [
          { id: "1", answer: "if i == 5 then" },
          { id: "2", answer: "if (i == 5)" },
          { id: "3", answer: "if i = 5" },
          { id: "4", answer: "if (i == 5) then" },
        ],
        correctAnswer: [{ id: "2", answer: "if (i == 5)" }],
      },
      {
        id: "6",
        question: "How does a `FOR` loop start?",
        description:
          "A `for` loop has three optional expressions enclosed in parentheses and separated by semicolons: initialization, condition, and increment/decrement. The code block follows in curly braces.",
        options: [
          { id: "1", answer: "for (i = 0; i <= 5)" },
          { id: "2", answer: "for i = 1 to 5" },
          { id: "3", answer: "for (i <= 5; i++)" },
          { id: "4", answer: "for (i = 0; i <= 5; i++)" },
        ],
        correctAnswer: [{ id: "4", answer: "for (i = 0; i <= 5; i++)" }],
      },
      {
        id: "7",
        question: "How can you add a comment in JavaScript?",
        description:
          "Single-line comments in JavaScript start with `//`. Multi-line comments start with `/*` and end with `*/`.",
        options: [
          { id: "1", answer: "" },
          { id: "2", answer: "'This is a comment" },
          { id: "3", answer: "// This is a comment" },
          { id: "4", answer: "# This is a comment" },
        ],
        correctAnswer: [{ id: "3", answer: "// This is a comment" }],
      },
      {
        id: "8",
        question: "Which event occurs when the user clicks on an HTML element?",
        description:
          "The `onclick` event attribute is used in HTML to execute a JavaScript function when an element is clicked.",
        options: [
          { id: "1", answer: "onchange" },
          { id: "2", answer: "onmouseover" },
          { id: "3", answer: "onmouseclick" },
          { id: "4", answer: "onclick" },
        ],
        correctAnswer: [{ id: "4", answer: "onclick" }],
      },
      {
        id: "9",
        question: "How do you access an HTML element with id 'demo'?",
        description:
          "The `document.getElementById()` method is a primary way to access a specific HTML element using its unique ID attribute.",
        options: [
          { id: "1", answer: "document.getElementByName('demo')" },
          { id: "2", answer: "document.getElementById('demo')" },
          { id: "3", answer: "document.getElement('demo')" },
          { id: "4", answer: "document.querySelector('#demo')" },
        ],
        correctAnswer: [{ id: "2", answer: "document.getElementById('demo')" }],
      },
      {
        id: "10",
        question: "Which method is used to write HTML output?",
        description:
          "The `document.write()` method is used to write directly into an HTML document. While functional, it's often avoided in modern web development for dynamic content after page load, as it can overwrite existing content.",
        options: [
          { id: "1", answer: "document.output()" },
          { id: "2", answer: "document.print()" },
          { id: "3", answer: "document.write()" },
          { id: "4", answer: "console.log()" },
        ],
        correctAnswer: [{ id: "3", answer: "document.write()" }],
      },
      {
        id: "11",
        question: "What is the data type of `null` in JavaScript?",
        description:
          "While `null` represents the intentional absence of any object value, when checked with the `typeof` operator, it returns 'object'. This is a long-standing bug in JavaScript that cannot be fixed due to backward compatibility concerns.",
        options: [
          { id: "1", answer: "undefined" },
          { id: "2", answer: "string" },
          { id: "3", answer: "number" },
          { id: "4", answer: "object" },
        ],
        correctAnswer: [{ id: "4", answer: "object" }],
      },
      {
        id: "12",
        question:
          "Which operator performs strict equality comparison (value and type)?",
        description:
          "The strict equality operator `===` checks if two values are equal in both value and data type, without performing type coercion. The `==` operator performs loose equality, allowing type coercion.",
        options: [
          { id: "1", answer: "=" },
          { id: "2", answer: "==" },
          { id: "3", answer: "===" },
          { id: "4", answer: "!=" },
        ],
        correctAnswer: [{ id: "3", answer: "===" }],
      },
      {
        id: "13",
        question: "What will `typeof []` return in JavaScript?",
        description:
          "Arrays in JavaScript are a type of object. Therefore, using the `typeof` operator on an array will return 'object'.",
        options: [
          { id: "1", answer: "array" },
          { id: "2", answer: "object" },
          { id: "3", answer: "list" },
          { id: "4", answer: "undefined" },
        ],
        correctAnswer: [{ id: "2", answer: "object" }],
      },
      {
        id: "14",
        question: "Which built-in method returns the length of a string?",
        description:
          "The `length` property (not a method) of a string object returns the number of characters in the string. It's a property, not a function, so it's accessed without parentheses.",
        options: [
          { id: "1", answer: "size()" },
          { id: "2", answer: "count()" },
          { id: "3", answer: "length()" },
          { id: "4", answer: "length" },
        ],
        correctAnswer: [{ id: "4", answer: "length" }],
      },
      {
        id: "15",
        question:
          "Which method of an Array object adds one or more elements to the end of an array and returns the new length of the array?",
        description:
          "The `push()` method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.",
        options: [
          { id: "1", answer: "unshift()" },
          { id: "2", answer: "add()" },
          { id: "3", answer: "append()" },
          { id: "4", answer: "push()" },
        ],
        correctAnswer: [{ id: "4", answer: "push()" }],
      },
      {
        id: "16",
        question:
          "Which method of an Array object removes the last element from an array and returns that element?",
        description:
          "The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.",
        options: [
          { id: "1", answer: "shift()" },
          { id: "2", answer: "removeLast()" },
          { id: "3", answer: "deleteLast()" },
          { id: "4", answer: "pop()" },
        ],
        correctAnswer: [{ id: "4", answer: "pop()" }],
      },
      {
        id: "17",
        question:
          "Which method of an Array object reverses the order of the elements of an array?",
        description:
          "The `reverse()` method reverses the order of the elements in an array. The first array element becomes the last, and the last array element becomes the first.",
        options: [
          { id: "1", answer: "sort()" },
          { id: "2", answer: "invert()" },
          { id: "3", answer: "reverse()" },
          { id: "4", answer: "flip()" },
        ],
        correctAnswer: [{ id: "3", answer: "reverse()" }],
      },
      {
        id: "18",
        question:
          "Which method of the String object is used to extract a part of a string and returns the extracted parts in a new string?",
        description:
          "The `slice()` method extracts a part of a string and returns the extracted parts in a new string. It takes two parameters: the starting index and the ending index (optional, non-inclusive).",
        options: [
          { id: "1", answer: "substring()" },
          { id: "2", answer: "cut()" },
          { id: "3", answer: "splice()" },
          { id: "4", answer: "slice()" },
        ],
        correctAnswer: [{ id: "4", answer: "slice()" }],
      },
      {
        id: "19",
        question: "Which JavaScript statement is used to handle errors?",
        description:
          "The `try...catch` statement is used to handle potential errors in JavaScript code. The `try` block contains the code that might throw an error, and the `catch` block handles the error if one occurs.",
        options: [
          { id: "1", answer: "throw...catch" },
          { id: "2", answer: "try...finally" },
          { id: "3", answer: "error...handle" },
          { id: "4", answer: "try...catch" },
        ],
        correctAnswer: [{ id: "4", answer: "try...catch" }],
      },
      {
        id: "20",
        question: "What is 'hoisting' in JavaScript?",
        description:
          "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before code execution. This means you can use variables and functions before they are declared in the code.",
        options: [
          { id: "1", answer: "A way to lift elements in the DOM." },
          {
            id: "2",
            answer:
              "A process of moving declarations to the top of their scope.",
          },
          { id: "3", answer: "A type of asynchronous operation." },
          { id: "4", answer: "The process of compiling JavaScript code." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A process of moving declarations to the top of their scope.",
          },
        ],
      },
      {
        id: "21",
        question: "What is a closure in JavaScript?",
        description:
          "A closure is a feature where an inner function has access to the outer (enclosing) function's variables—a scope chain—even after the outer function has finished execution. This allows for powerful patterns like data encapsulation.",
        options: [
          { id: "1", answer: "A way to close a web page." },
          {
            id: "2",
            answer:
              "A function that has access to its outer function's scope even after the outer function returns.",
          },
          {
            id: "3",
            answer: "A type of loop that closes when a condition is met.",
          },
          {
            id: "4",
            answer: "An error that prevents a function from executing.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A function that has access to its outer function's scope even after the outer function returns.",
          },
        ],
      },
      {
        id: "22",
        question: "What does `NaN` stand for?",
        description:
          "`NaN` stands for 'Not-a-Number'. It is a numeric data type value representing an undefined or unrepresentable numerical value. For example, `0 / 0` results in `NaN`.",
        options: [
          { id: "1", answer: "Not a Null" },
          { id: "2", answer: "New and Null" },
          { id: "3", answer: "Not-a-Number" },
          { id: "4", answer: "No Available Number" },
        ],
        correctAnswer: [{ id: "3", answer: "Not-a-Number" }],
      },
      {
        id: "23",
        question: "Which function is used to parse a string to an integer?",
        description:
          "The `parseInt()` function parses a string argument and returns an integer. If the string cannot be converted, it returns `NaN`.",
        options: [
          { id: "1", answer: "Integer.parse()" },
          { id: "2", answer: "toInteger()" },
          { id: "3", answer: "parseInt()" },
          { id: "4", answer: "stringToInteger()" },
        ],
        correctAnswer: [{ id: "3", answer: "parseInt()" }],
      },
      {
        id: "24",
        question: "What is the purpose of the `this` keyword in JavaScript?",
        description:
          "The `this` keyword refers to the object it belongs to. Its value depends on how the function is called. In a method, `this` refers to the owner object. In a function, `this` refers to the global object (window in browsers). In an event, `this` refers to the element that received the event.",
        options: [
          { id: "1", answer: "Refers to the current HTML document." },
          { id: "2", answer: "Refers to the global window object." },
          {
            id: "3",
            answer:
              "Refers to the object it belongs to, depending on the execution context.",
          },
          { id: "4", answer: "Refers to the parent element in the DOM." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Refers to the object it belongs to, depending on the execution context.",
          },
        ],
      },
      {
        id: "25",
        question:
          "Which array method executes a provided function once for each array element?",
        description:
          "The `forEach()` method executes a provided callback function once for each element in an array, in ascending order. It does not return a new array; it's used for iteration with side effects.",
        options: [
          { id: "1", answer: "map()" },
          { id: "2", answer: "filter()" },
          { id: "3", answer: "loop()" },
          { id: "4", answer: "forEach()" },
        ],
        correctAnswer: [{ id: "4", answer: "forEach()" }],
      },
      {
        id: "26",
        question:
          "Which method creates a new array with the results of calling a provided function on every element in the calling array?",
        description:
          "The `map()` method creates a new array by calling a provided function on every element in the calling array. It does not modify the original array.",
        options: [
          { id: "1", answer: "forEach()" },
          { id: "2", answer: "filter()" },
          { id: "3", answer: "reduce()" },
          { id: "4", answer: "map()" },
        ],
        correctAnswer: [{ id: "4", answer: "map()" }],
      },
      {
        id: "27",
        question:
          "Which array method creates a new array with all elements that pass the test implemented by the provided function?",
        description:
          "The `filter()` method creates a new array with all elements that pass the test implemented by the provided callback function. It does not modify the original array.",
        options: [
          { id: "1", answer: "map()" },
          { id: "2", answer: "forEach()" },
          { id: "3", answer: "select()" },
          { id: "4", answer: "filter()" },
        ],
        correctAnswer: [{ id: "4", answer: "filter()" }],
      },
      {
        id: "28",
        question: "What is a callback function in JavaScript?",
        description:
          "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are fundamental for asynchronous programming in JavaScript.",
        options: [
          {
            id: "1",
            answer: "A function that automatically executes on page load.",
          },
          { id: "2", answer: "A function that calls itself recursively." },
          {
            id: "3",
            answer:
              "A function that is passed as an argument to another function.",
          },
          { id: "4", answer: "A function that returns another function." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A function that is passed as an argument to another function.",
          },
        ],
      },
      {
        id: "29",
        question: "What does `JSON.parse()` do?",
        description:
          "`JSON.parse()` is a global method that parses a JSON string, constructing the JavaScript value or object described by the string. It is commonly used to convert JSON data received from a web server into a JavaScript object.",
        options: [
          { id: "1", answer: "Converts a JavaScript object to a JSON string." },
          {
            id: "2",
            answer:
              "Parses a JSON string and converts it into a JavaScript object.",
          },
          { id: "3", answer: "Parses an XML string." },
          { id: "4", answer: "Encrypts JSON data." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Parses a JSON string and converts it into a JavaScript object.",
          },
        ],
      },
      {
        id: "30",
        question: "What does `JSON.stringify()` do?",
        description:
          "`JSON.stringify()` is a global method that converts a JavaScript value or object to a JSON string. It is commonly used when sending data from a JavaScript application to a web server.",
        options: [
          { id: "1", answer: "Parses a JSON string into a JavaScript object." },
          {
            id: "2",
            answer: "Converts a JavaScript object into a JSON string.",
          },
          { id: "3", answer: "Stringifies a standard JavaScript function." },
          { id: "4", answer: "Validates a JSON string." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "Converts a JavaScript object into a JSON string.",
          },
        ],
      },
      {
        id: "31",
        question: "What is an event loop in JavaScript?",
        description:
          "The event loop is a crucial part of JavaScript's concurrency model, which manages asynchronous callbacks. It continuously checks the message queue and pushes tasks (callbacks) onto the call stack when the call stack is empty.",
        options: [
          {
            id: "1",
            answer: "A loop that constantly checks for syntax errors.",
          },
          {
            id: "2",
            answer: "A mechanism for handling synchronous code execution.",
          },
          {
            id: "3",
            answer:
              "A mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system kernel.",
          },
          {
            id: "4",
            answer:
              "A single-threaded loop that continuously checks the message queue for tasks.",
          },
        ],
        correctAnswer: [
          {
            id: "4",
            answer:
              "A single-threaded loop that continuously checks the message queue for tasks.",
          },
        ],
      },
      {
        id: "32",
        question:
          "What is the difference between `let` and `var` in terms of scope?",
        description:
          "`var` declarations are function-scoped or globally-scoped, meaning they are hoisted and accessible throughout the entire function or global context. `let` declarations are block-scoped, meaning they are only accessible within the block (curly braces) where they are defined, which helps prevent variable leakage.",
        options: [
          {
            id: "1",
            answer: "`let` is function-scoped, `var` is block-scoped.",
          },
          {
            id: "2",
            answer:
              "`let` is block-scoped, `var` is function-scoped/globally-scoped.",
          },
          {
            id: "3",
            answer: "There is no difference in scope between `let` and `var`.",
          },
          {
            id: "4",
            answer: "`var` is for constants, `let` is for variables.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "`let` is block-scoped, `var` is function-scoped/globally-scoped.",
          },
        ],
      },
      {
        id: "33",
        question:
          "What are template literals (template strings) in JavaScript?",
        description:
          "Template literals are a new feature in ES6 (ECMAScript 2015) that allow for embedded expressions, multi-line strings, and string interpolation. They are enclosed by backticks (`` ` ``) instead of single or double quotes.",
        options: [
          { id: "1", answer: "A way to define HTML templates." },
          { id: "2", answer: "A new syntax for regular expressions." },
          {
            id: "3",
            answer:
              "Strings enclosed by backticks (`` ` ``) that allow embedded expressions and multi-line strings.",
          },
          { id: "4", answer: "A method for string concatenation only." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Strings enclosed by backticks (`` ` ``) that allow embedded expressions and multi-line strings.",
          },
        ],
      },
      {
        id: "34",
        question: "What is the result of `2 + '2'` in JavaScript?",
        description:
          "When the `+` operator is used with a number and a string, JavaScript performs type coercion and concatenates the two values as strings. So, 2 is converted to '2', and then '2' and '2' are joined.",
        options: [
          { id: "1", answer: "4" },
          { id: "2", answer: "NaN" },
          { id: "3", answer: "22" },
          { id: "4", answer: "TypeError" },
        ],
        correctAnswer: [{ id: "3", answer: "22" }],
      },
      {
        id: "35",
        question: "What is the result of `'2' * '3'` in JavaScript?",
        description:
          "When arithmetic operators like `*` (multiplication) are used with string operands that represent valid numbers, JavaScript attempts to convert the strings to numbers before performing the operation. This is an example of implicit type coercion.",
        options: [
          { id: "1", answer: "'23'" },
          { id: "2", answer: "6" },
          { id: "3", answer: "NaN" },
          { id: "4", answer: "TypeError" },
        ],
        correctAnswer: [{ id: "2", answer: "6" }],
      },
      {
        id: "36",
        question: "What are Promises in JavaScript?",
        description:
          "Promises are a modern way to handle asynchronous operations. A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. They provide a cleaner alternative to nested callbacks (callback hell).",
        options: [
          { id: "1", answer: "A type of synchronous function." },
          { id: "2", answer: "A way to handle immediate execution of code." },
          {
            id: "3",
            answer:
              "An object representing the eventual completion or failure of an asynchronous operation.",
          },
          {
            id: "4",
            answer: "A new type of loop for asynchronous iterations.",
          },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "An object representing the eventual completion or failure of an asynchronous operation.",
          },
        ],
      },
      {
        id: "37",
        question: "What is the purpose of `async/await`?",
        description:
          "`async/await` is a modern JavaScript feature that makes asynchronous code look and behave more like synchronous code. `async` functions return a Promise, and `await` pauses the execution of an `async` function until a Promise is settled (resolved or rejected).",
        options: [
          { id: "1", answer: "To make synchronous code asynchronous." },
          { id: "2", answer: "To replace traditional `for` loops." },
          {
            id: "3",
            answer:
              "To write asynchronous code that looks and behaves synchronously.",
          },
          { id: "4", answer: "To handle errors in synchronous code." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To write asynchronous code that looks and behaves synchronously.",
          },
        ],
      },
      {
        id: "38",
        question:
          "Which global function is used to convert a string into a number?",
        description:
          "While `parseInt()` converts to an integer and `parseFloat()` converts to a float, `Number()` is a global function that can convert various types (including strings) to numbers. The unary plus operator `+` is also a common shorthand.",
        options: [
          { id: "1", answer: "stringToNum()" },
          { id: "2", answer: "toNum()" },
          { id: "3", answer: "Number()" },
          { id: "4", answer: "convertNumber()" },
        ],
        correctAnswer: [{ id: "3", answer: "Number()" }],
      },
      {
        id: "39",
        question: "What is the result of `[] == false` in JavaScript?",
        description:
          "Due to loose equality (`==`) and type coercion, when comparing an array to a boolean, JavaScript first attempts to convert both to numbers. An empty array `[]` converts to `0`, and `false` converts to `0`. Since `0 == 0` is true, the result is `true`.",
        options: [
          { id: "1", answer: "true" },
          { id: "2", answer: "false" },
          { id: "3", answer: "TypeError" },
          { id: "4", answer: "undefined" },
        ],
        correctAnswer: [{ id: "1", answer: "true" }],
      },
      {
        id: "40",
        question: "What is the prototype chain in JavaScript?",
        description:
          "The prototype chain is a mechanism by which JavaScript objects inherit features from one another. Every object has a private property `[[Prototype]]` (or `__proto__`), which points to another object (its prototype). When you try to access a property or method on an object, if it's not found on the object itself, JavaScript looks up the prototype chain until it finds the property or reaches the end of the chain (null).",
        options: [
          { id: "1", answer: "A sequence of functions called in order." },
          { id: "2", answer: "The chain of events in the event loop." },
          {
            id: "3",
            answer:
              "A mechanism for objects to inherit properties and methods from other objects.",
          },
          { id: "4", answer: "A list of all global variables." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A mechanism for objects to inherit properties and methods from other objects.",
          },
        ],
      },
      {
        id: "41",
        question: "What is an Immediately Invoked Function Expression (IIFE)?",
        description:
          "An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It's used to create a private scope for variables, preventing them from polluting the global namespace.",
        options: [
          {
            id: "1",
            answer: "A function that is called by an event listener.",
          },
          { id: "2", answer: "A function that is only invoked after a delay." },
          {
            id: "3",
            answer:
              "A function that runs as soon as it is defined, often used for scope encapsulation.",
          },
          { id: "4", answer: "A function that is declared but never called." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A function that runs as soon as it is defined, often used for scope encapsulation.",
          },
        ],
      },
      {
        id: "42",
        question: "How do you check if a variable `myVar` is `undefined`?",
        description:
          "You can check if a variable is `undefined` using the strict equality operator `=== undefined` to avoid type coercion issues. Alternatively, `typeof myVar === 'undefined'` is also a reliable way.",
        options: [
          { id: "1", answer: "if (myVar == null)" },
          { id: "2", answer: "if (myVar === null)" },
          { id: "3", answer: "if (myVar === undefined)" },
          { id: "4", answer: "if (isNaN(myVar))" },
        ],
        correctAnswer: [{ id: "3", answer: "if (myVar === undefined)" }],
      },
      {
        id: "43",
        question: "What is the purpose of `event.preventDefault()`?",
        description:
          "The `event.preventDefault()` method stops the default action of an element from happening. For example, it can stop a form from submitting when a submit button is clicked, or prevent a link from navigating to a new URL.",
        options: [
          {
            id: "1",
            answer: "To stop event propagation (bubbling/capturing).",
          },
          { id: "2", answer: "To prevent the default behavior of an event." },
          { id: "3", answer: "To reload the page." },
          { id: "4", answer: "To stop all JavaScript execution." },
        ],
        correctAnswer: [
          { id: "2", answer: "To prevent the default behavior of an event." },
        ],
      },
      {
        id: "44",
        question:
          "Which method is used to remove whitespace from both ends of a string?",
        description:
          "The `trim()` method removes whitespace (spaces, tabs, newlines) from both ends of a string. It does not change the original string but returns a new string.",
        options: [
          { id: "1", answer: "strip()" },
          { id: "2", answer: "clean()" },
          { id: "3", answer: "trim()" },
          { id: "4", answer: "removeSpace()" },
        ],
        correctAnswer: [{ id: "3", answer: "trim()" }],
      },
      {
        id: "45",
        question:
          "Which method returns a new array with a portion of the original array, without modifying the original?",
        description:
          "The `slice()` method extracts a portion of an array into a new array. It takes a start and end index (optional, non-inclusive) as arguments and does not modify the original array.",
        options: [
          { id: "1", answer: "splice()" },
          { id: "2", answer: "cut()" },
          { id: "3", answer: "slice()" },
          { id: "4", answer: "portion()" },
        ],
        correctAnswer: [{ id: "3", answer: "slice()" }],
      },
      {
        id: "46",
        question: "What is a 'spread operator' in JavaScript (e.g., `...arr`)?",
        description:
          "The spread syntax (`...`) allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.",
        options: [
          { id: "1", answer: "An operator for multiplying array elements." },
          {
            id: "2",
            answer: "An operator used to combine multiple functions.",
          },
          {
            id: "3",
            answer:
              "Syntax to expand an iterable (like an array) into individual elements.",
          },
          { id: "4", answer: "A shorthand for creating new objects." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Syntax to expand an iterable (like an array) into individual elements.",
          },
        ],
      },
      {
        id: "47",
        question: "What is 'destructuring assignment' in JavaScript?",
        description:
          "Destructuring assignment is a special syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables. It provides a concise way to extract data.",
        options: [
          {
            id: "1",
            answer:
              "A method to break down a JavaScript file into smaller parts.",
          },
          {
            id: "2",
            answer:
              "A syntax for assigning multiple values to a single variable.",
          },
          {
            id: "3",
            answer:
              "A way to extract values from arrays or properties from objects into distinct variables.",
          },
          {
            id: "4",
            answer:
              "A technique to optimize code by removing unnecessary variables.",
          },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A way to extract values from arrays or properties from objects into distinct variables.",
          },
        ],
      },
      {
        id: "48",
        question: "Which method can be used to convert a number to a string?",
        description:
          "The `toString()` method is available on all JavaScript objects and primitives, including numbers, to convert them to their string representation. The global `String()` function can also be used.",
        options: [
          { id: "1", answer: "parseString()" },
          { id: "2", answer: "stringlify()" },
          { id: "3", answer: "asString()" },
          { id: "4", answer: "toString()" },
        ],
        correctAnswer: [{ id: "4", answer: "toString()" }],
      },
      {
        id: "49",
        question: "What is the output of `console.log(10 == '10')`?",
        description:
          "The `==` (loose equality) operator performs type coercion before comparison. In this case, the string '10' is coerced to the number 10, making the comparison `10 == 10`, which evaluates to `true`.",
        options: [
          { id: "1", answer: "false" },
          { id: "2", answer: "true" },
          { id: "3", answer: "Error" },
          { id: "4", answer: "undefined" },
        ],
        correctAnswer: [{ id: "2", answer: "true" }],
      },
      {
        id: "50",
        question: "What is the output of `console.log(10 === '10')`?",
        description:
          "The `===` (strict equality) operator performs comparison without type coercion. Since the number 10 and the string '10' are of different types, the comparison evaluates to `false`.",
        options: [
          { id: "1", answer: "true" },
          { id: "2", answer: "false" },
          { id: "3", answer: "Error" },
          { id: "4", answer: "undefined" },
        ],
        correctAnswer: [{ id: "2", answer: "false" }],
      },
    ],
  },
  {
    id: "4",
    title: "SQL (Structured Query Language)",
    description:
      "Standard language for managing and manipulating relational databases.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What does SQL stand for?",
        description:
          "SQL is an acronym for Structured Query Language. It is a standard language for storing, manipulating, and retrieving data in relational databases.",
        options: [
          { id: "1", answer: "Structured Question Language" },
          { id: "2", answer: "Standard Query Language" },
          { id: "3", answer: "Structured Query Language" },
          { id: "4", answer: "Sequential Query Language" },
        ],
        correctAnswer: [{ id: "3", answer: "Structured Query Language" }],
      },
      {
        id: "2",
        question:
          "Which SQL statement is used to extract data from a database?",
        description:
          "The `SELECT` statement is used to query the database and retrieve data that matches the specified criteria. It is the most common DQL (Data Query Language) command.",
        options: [
          { id: "1", answer: "GET" },
          { id: "2", answer: "OPEN" },
          { id: "3", answer: "SELECT" },
          { id: "4", answer: "EXTRACT" },
        ],
        correctAnswer: [{ id: "3", answer: "SELECT" }],
      },
      {
        id: "3",
        question: "Which SQL statement is used to update data in a database?",
        description:
          "The `UPDATE` statement is used to modify existing records in a table. It is part of DML (Data Manipulation Language).",
        options: [
          { id: "1", answer: "MODIFY" },
          { id: "2", answer: "SAVE" },
          { id: "3", answer: "UPDATE" },
          { id: "4", answer: "CHANGE" },
        ],
        correctAnswer: [{ id: "3", answer: "UPDATE" }],
      },
      {
        id: "4",
        question: "Which SQL statement is used to delete data from a database?",
        description:
          "The `DELETE` statement is used to remove existing records from a table. It is part of DML (Data Manipulation Language).",
        options: [
          { id: "1", answer: "REMOVE" },
          { id: "2", answer: "ERASE" },
          { id: "3", answer: "DELETE" },
          { id: "4", answer: "CLEAR" },
        ],
        correctAnswer: [{ id: "3", answer: "DELETE" }],
      },
      {
        id: "5",
        question:
          "Which SQL statement is used to insert new data into a database?",
        description:
          "The `INSERT INTO` statement is used to add new records (rows) to a table. It is part of DML (Data Manipulation Language).",
        options: [
          { id: "1", answer: "ADD NEW" },
          { id: "2", answer: "INSERT NEW" },
          { id: "3", answer: "ADD RECORD" },
          { id: "4", answer: "INSERT INTO" },
        ],
        correctAnswer: [{ id: "4", answer: "INSERT INTO" }],
      },
      {
        id: "6",
        question: "Which SQL keyword is used to sort the result-set?",
        description:
          "The `ORDER BY` clause is used to sort the result-set of a query. It can sort in ascending (`ASC`) or descending (`DESC`) order.",
        options: [
          { id: "1", answer: "SORT BY" },
          { id: "2", answer: "ORDER" },
          { id: "3", answer: "SORT" },
          { id: "4", answer: "ORDER BY" },
        ],
        correctAnswer: [{ id: "4", answer: "ORDER BY" }],
      },
      {
        id: "7",
        question: "Which SQL keyword is used to select only unique values?",
        description:
          "The `DISTINCT` keyword is used in a `SELECT` statement to return only unique (different) values. It eliminates duplicate rows from the result set.",
        options: [
          { id: "1", answer: "UNIQUE" },
          { id: "2", answer: "DIFFERENT" },
          { id: "3", answer: "DISTINCT" },
          { id: "4", answer: "SINGLE" },
        ],
        correctAnswer: [{ id: "3", answer: "DISTINCT" }],
      },
      {
        id: "8",
        question:
          "Which SQL clause is used to filter records based on a specified condition?",
        description:
          "The `WHERE` clause is used to specify a condition while fetching the data from a single table or joining with multiple tables. It filters records based on the criteria.",
        options: [
          { id: "1", answer: "GET" },
          { id: "2", answer: "FILTER" },
          { id: "3", answer: "WHEN" },
          { id: "4", answer: "WHERE" },
        ],
        correctAnswer: [{ id: "4", answer: "WHERE" }],
      },
      {
        id: "9",
        question: "Which operator is used to search for a pattern in a column?",
        description:
          "The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column. It is often used with wildcard characters like `%` (zero or more characters) and `_` (single character).",
        options: [
          { id: "1", answer: "PATTERN" },
          { id: "2", answer: "SEARCH" },
          { id: "3", answer: "IN" },
          { id: "4", answer: "LIKE" },
        ],
        correctAnswer: [{ id: "4", answer: "LIKE" }],
      },
      {
        id: "10",
        question:
          "Which SQL keyword is used to return the number of rows in a table?",
        description:
          "The `COUNT()` aggregate function returns the number of rows that matches a specified criterion. `COUNT(*)` counts all rows.",
        options: [
          { id: "1", answer: "NUMBER()" },
          { id: "2", answer: "SUM()" },
          { id: "3", answer: "TOTAL()" },
          { id: "4", answer: "COUNT()" },
        ],
        correctAnswer: [{ id: "4", answer: "COUNT()" }],
      },
      {
        id: "11",
        question:
          "Which SQL statement is used to create a new table in a database?",
        description:
          "The `CREATE TABLE` statement is used to create a new table in the database. It specifies the table name and its column definitions.",
        options: [
          { id: "1", answer: "ADD TABLE" },
          { id: "2", answer: "MAKE TABLE" },
          { id: "3", answer: "CREATE TABLE" },
          { id: "4", answer: "NEW TABLE" },
        ],
        correctAnswer: [{ id: "3", answer: "CREATE TABLE" }],
      },
      {
        id: "12",
        question:
          "Which SQL statement is used to add new columns to an existing table?",
        description:
          "The `ALTER TABLE` statement is used to add, delete, or modify columns in an existing table. To add a new column, you use `ALTER TABLE ADD COLUMN`.",
        options: [
          { id: "1", answer: "MODIFY TABLE" },
          { id: "2", answer: "ADD COLUMN" },
          { id: "3", answer: "ALTER TABLE" },
          { id: "4", answer: "UPDATE TABLE" },
        ],
        correctAnswer: [{ id: "3", answer: "ALTER TABLE" }],
      },
      {
        id: "13",
        question: "Which SQL statement is used to delete an existing table?",
        description:
          "The `DROP TABLE` statement is used to delete an entire table from the database, including its structure and all its data.",
        options: [
          { id: "1", answer: "REMOVE TABLE" },
          { id: "2", answer: "DELETE TABLE" },
          { id: "3", answer: "ERASE TABLE" },
          { id: "4", answer: "DROP TABLE" },
        ],
        correctAnswer: [{ id: "4", answer: "DROP TABLE" }],
      },
      {
        id: "14",
        question:
          "Which SQL keyword is used to combine the result-set of two or more SELECT statements?",
        description:
          "The `UNION` operator is used to combine the result-set of two or more `SELECT` statements. Each `SELECT` statement within the `UNION` must have the same number of columns, with similar data types, and in the same order. `UNION` removes duplicate rows, while `UNION ALL` retains them.",
        options: [
          { id: "1", answer: "COMBINE" },
          { id: "2", answer: "MERGE" },
          { id: "3", answer: "JOIN" },
          { id: "4", answer: "UNION" },
        ],
        correctAnswer: [{ id: "4", answer: "UNION" }],
      },
      {
        id: "15",
        question:
          "Which SQL JOIN returns all rows from both tables, where there is a match in either table?",
        description:
          "A `FULL OUTER JOIN` (or `FULL JOIN`) returns all rows when there is a match in one of the tables. It returns rows from both tables, with NULLs in columns where no match is found.",
        options: [
          { id: "1", answer: "INNER JOIN" },
          { id: "2", answer: "LEFT JOIN" },
          { id: "3", answer: "RIGHT JOIN" },
          { id: "4", answer: "FULL OUTER JOIN" },
        ],
        correctAnswer: [{ id: "4", answer: "FULL OUTER JOIN" }],
      },
      {
        id: "16",
        question:
          "Which SQL JOIN returns only the rows where there is a match in both tables?",
        description:
          "An `INNER JOIN` returns only the rows that have matching values in both tables. It is the most common type of join.",
        options: [
          { id: "1", answer: "LEFT JOIN" },
          { id: "2", answer: "FULL JOIN" },
          { id: "3", answer: "RIGHT JOIN" },
          { id: "4", answer: "INNER JOIN" },
        ],
        correctAnswer: [{ id: "4", answer: "INNER JOIN" }],
      },
      {
        id: "17",
        question:
          "Which SQL JOIN returns all rows from the left table, and the matching rows from the right table?",
        description:
          "A `LEFT JOIN` (or `LEFT OUTER JOIN`) returns all records from the left table, and the matching records from the right table. If there is no match, the right side will have NULLs.",
        options: [
          { id: "1", answer: "INNER JOIN" },
          { id: "2", answer: "RIGHT JOIN" },
          { id: "3", answer: "LEFT JOIN" },
          { id: "4", answer: "FULL JOIN" },
        ],
        correctAnswer: [{ id: "3", answer: "LEFT JOIN" }],
      },
      {
        id: "18",
        question:
          "Which SQL JOIN returns all rows from the right table, and the matching rows from the left table?",
        description:
          "A `RIGHT JOIN` (or `RIGHT OUTER JOIN`) returns all records from the right table, and the matching records from the left table. If there is no match, the left side will have NULLs.",
        options: [
          { id: "1", answer: "LEFT JOIN" },
          { id: "2", answer: "INNER JOIN" },
          { id: "3", answer: "FULL JOIN" },
          { id: "4", answer: "RIGHT JOIN" },
        ],
        correctAnswer: [{ id: "4", answer: "RIGHT JOIN" }],
      },
      {
        id: "19",
        question:
          "Which clause is used with aggregate functions (like COUNT, MAX, MIN, SUM, AVG) to group result-sets?",
        description:
          "The `GROUP BY` clause is used in a `SELECT` statement to group rows that have the same values in specified columns into a summary row. It is often used with aggregate functions.",
        options: [
          { id: "1", answer: "ORDER BY" },
          { id: "2", answer: "FILTER BY" },
          { id: "3", answer: "SORT BY" },
          { id: "4", answer: "GROUP BY" },
        ],
        correctAnswer: [{ id: "4", answer: "GROUP BY" }],
      },
      {
        id: "20",
        question:
          "Which clause is used to filter groups based on a specified condition after `GROUP BY`?",
        description:
          "The `HAVING` clause is used to filter groups that are created by the `GROUP BY` clause. Unlike `WHERE`, `HAVING` can filter based on aggregate function results.",
        options: [
          { id: "1", answer: "WHERE" },
          { id: "2", answer: "FILTER" },
          { id: "3", answer: "GROUP WHERE" },
          { id: "4", answer: "HAVING" },
        ],
        correctAnswer: [{ id: "4", answer: "HAVING" }],
      },
      {
        id: "21",
        question: "What is the purpose of the `PRIMARY KEY` constraint?",
        description:
          "A `PRIMARY KEY` constraint uniquely identifies each record in a database table. It must contain unique values, and cannot contain NULL values. A table can have only one primary key, which can consist of one or more columns.",
        options: [
          {
            id: "1",
            answer: "To ensure that a column contains only unique values.",
          },
          { id: "2", answer: "To link two tables together." },
          { id: "3", answer: "To uniquely identify each record in a table." },
          { id: "4", answer: "To prevent null values in a column." },
        ],
        correctAnswer: [
          { id: "3", answer: "To uniquely identify each record in a table." },
        ],
      },
      {
        id: "22",
        question: "What is the purpose of the `FOREIGN KEY` constraint?",
        description:
          "A `FOREIGN KEY` is a field (or collection of fields) in one table that refers to the `PRIMARY KEY` in another table. It is used to link two tables together and maintain referential integrity.",
        options: [
          { id: "1", answer: "To ensure unique values in a column." },
          { id: "2", answer: "To uniquely identify each record in a table." },
          {
            id: "3",
            answer: "To link two tables and maintain referential integrity.",
          },
          { id: "4", answer: "To prevent null values in a column." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To link two tables and maintain referential integrity.",
          },
        ],
      },
      {
        id: "23",
        question:
          "Which SQL constraint ensures that all values in a column are different?",
        description:
          "The `UNIQUE` constraint ensures that all values in a column are different. Unlike a `PRIMARY KEY`, a table can have multiple `UNIQUE` constraints, and they can contain NULL values (though only one NULL, depending on the database system).",
        options: [
          { id: "1", answer: "PRIMARY KEY" },
          { id: "2", answer: "NOT NULL" },
          { id: "3", answer: "UNIQUE" },
          { id: "4", answer: "DISTINCT" },
        ],
        correctAnswer: [{ id: "3", answer: "UNIQUE" }],
      },
      {
        id: "24",
        question:
          "Which SQL constraint enforces that a column cannot accept NULL values?",
        description:
          "The `NOT NULL` constraint enforces that a column cannot accept NULL values. This means that a value must always be provided for that column.",
        options: [
          { id: "1", answer: "NO NULL" },
          { id: "2", answer: "MANDATORY" },
          { id: "3", answer: "NOT NULL" },
          { id: "4", answer: "REQUIRED" },
        ],
        correctAnswer: [{ id: "3", answer: "NOT NULL" }],
      },
      {
        id: "25",
        question: "What is DDL in SQL?",
        description:
          "DDL stands for Data Definition Language. It comprises commands used to define, modify, and drop database structures, such as `CREATE`, `ALTER`, and `DROP`.",
        options: [
          { id: "1", answer: "Data Query Language" },
          { id: "2", answer: "Data Manipulation Language" },
          { id: "3", answer: "Data Definition Language" },
          { id: "4", answer: "Data Control Language" },
        ],
        correctAnswer: [{ id: "3", answer: "Data Definition Language" }],
      },
      {
        id: "26",
        question: "What is DML in SQL?",
        description:
          "DML stands for Data Manipulation Language. It comprises commands used for managing data within schema objects, such as `INSERT`, `UPDATE`, and `DELETE`.",
        options: [
          { id: "1", answer: "Data Definition Language" },
          { id: "2", answer: "Data Manipulation Language" },
          { id: "3", answer: "Data Control Language" },
          { id: "4", answer: "Data Query Language" },
        ],
        correctAnswer: [{ id: "2", answer: "Data Manipulation Language" }],
      },
      {
        id: "27",
        question: "What is DCL in SQL?",
        description:
          "DCL stands for Data Control Language. It comprises commands associated with rights, permissions, and other controls of the database system, such as `GRANT` and `REVOKE`.",
        options: [
          { id: "1", answer: "Data Definition Language" },
          { id: "2", answer: "Data Manipulation Language" },
          { id: "3", answer: "Data Control Language" },
          { id: "4", answer: "Data Query Language" },
        ],
        correctAnswer: [{ id: "3", answer: "Data Control Language" }],
      },
      {
        id: "28",
        question:
          "Which SQL function is used to calculate the average value of a numeric column?",
        description:
          "The `AVG()` aggregate function calculates the average value of a numeric column. It ignores NULL values.",
        options: [
          { id: "1", answer: "SUM()" },
          { id: "2", answer: "MEAN()" },
          { id: "3", answer: "AVG()" },
          { id: "4", answer: "AVERAGE()" },
        ],
        correctAnswer: [{ id: "3", answer: "AVG()" }],
      },
      {
        id: "29",
        question:
          "Which SQL function returns the largest value of the selected column?",
        description:
          "The `MAX()` aggregate function returns the largest value in a set of values. It can be used on numeric, string, or date data types.",
        options: [
          { id: "1", answer: "LARGEST()" },
          { id: "2", answer: "GREATEST()" },
          { id: "3", answer: "TOP()" },
          { id: "4", answer: "MAX()" },
        ],
        correctAnswer: [{ id: "4", answer: "MAX()" }],
      },
      {
        id: "30",
        question:
          "Which SQL function returns the smallest value of the selected column?",
        description:
          "The `MIN()` aggregate function returns the smallest value in a set of values. It can be used on numeric, string, or date data types.",
        options: [
          { id: "1", answer: "SMALLEST()" },
          { id: "2", answer: "LEAST()" },
          { id: "3", answer: "BOTTOM()" },
          { id: "4", answer: "MIN()" },
        ],
        correctAnswer: [{ id: "4", answer: "MIN()" }],
      },
      {
        id: "31",
        question: "Which SQL function returns the sum of a numeric column?",
        description:
          "The `SUM()` aggregate function calculates the sum of a set of numeric values. It ignores NULL values.",
        options: [
          { id: "1", answer: "TOTAL()" },
          { id: "2", answer: "ADD()" },
          { id: "3", answer: "SUM()" },
          { id: "4", answer: "CALCULATE()" },
        ],
        correctAnswer: [{ id: "3", answer: "SUM()" }],
      },
      {
        id: "32",
        question:
          "Which SQL operator allows you to specify multiple values in a `WHERE` clause?",
        description:
          "The `IN` operator allows you to specify multiple values in a `WHERE` clause. It is a shorthand for multiple `OR` conditions.",
        options: [
          { id: "1", answer: "ANY" },
          { id: "2", answer: "OR" },
          { id: "3", answer: "EXISTS" },
          { id: "4", answer: "IN" },
        ],
        correctAnswer: [{ id: "4", answer: "IN" }],
      },
      {
        id: "33",
        question:
          "Which SQL operator is used to test for the presence of a value in a column within a specified range?",
        description:
          "The `BETWEEN` operator selects values within a given range. The values can be numbers, text, or dates. It is inclusive, meaning the start and end values are included in the result.",
        options: [
          { id: "1", answer: "RANGE" },
          { id: "2", answer: "AMONG" },
          { id: "3", answer: "WITHIN" },
          { id: "4", answer: "BETWEEN" },
        ],
        correctAnswer: [{ id: "4", answer: "BETWEEN" }],
      },
      {
        id: "34",
        question: "Which SQL operator tests for NULL values?",
        description:
          "The `IS NULL` operator is used to test for empty values (NULL values) in a column. You cannot use equality operators (`=`) with NULL because NULL is not equal to anything, not even itself.",
        options: [
          { id: "1", answer: "= NULL" },
          { id: "2", answer: "NULL CHECK" },
          { id: "3", answer: "IS NULL" },
          { id: "4", answer: "HAS NULL" },
        ],
        correctAnswer: [{ id: "3", answer: "IS NULL" }],
      },
      {
        id: "35",
        question: "Which SQL operator tests for NON-NULL values?",
        description:
          "The `IS NOT NULL` operator is used to test for values that are not empty (not NULL values) in a column.",
        options: [
          { id: "1", answer: "!= NULL" },
          { id: "2", answer: "NOT NULL" },
          { id: "3", answer: "IS NOT NULL" },
          { id: "4", answer: "HAS VALUE" },
        ],
        correctAnswer: [{ id: "3", answer: "IS NOT NULL" }],
      },
      {
        id: "36",
        question: "What is the purpose of `TRUNCATE TABLE`?",
        description:
          "`TRUNCATE TABLE` is a DDL command that quickly removes all rows from a table. It is faster than `DELETE FROM table_name;` without a `WHERE` clause because it deallocates the data pages/rows, and it typically cannot be rolled back.",
        options: [
          { id: "1", answer: "To delete specific rows from a table." },
          {
            id: "2",
            answer: "To delete the table structure but keep the data.",
          },
          {
            id: "3",
            answer:
              "To delete all rows from a table, effectively emptying it quickly.",
          },
          { id: "4", answer: "To rename a table." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To delete all rows from a table, effectively emptying it quickly.",
          },
        ],
      },
      {
        id: "37",
        question:
          "Which command is used to add a new user to the database and grant them permissions?",
        description:
          "The `CREATE USER` command is used to add a new user. `GRANT` is then used to assign specific permissions to that user on database objects.",
        options: [
          { id: "1", answer: "CREATE USER AND ADD PERMISSIONS" },
          { id: "2", answer: "ADD USER, SET PRIVILEGES" },
          { id: "3", answer: "NEW USER WITH RIGHTS" },
          { id: "4", answer: "CREATE USER, then GRANT" },
        ],
        correctAnswer: [{ id: "4", answer: "CREATE USER, then GRANT" }],
      },
      {
        id: "38",
        question:
          "Which command is used to remove specific privileges from a user?",
        description:
          "The `REVOKE` command is used to remove previously granted access privileges or roles from a user or group.",
        options: [
          { id: "1", answer: "DENY" },
          { id: "2", answer: "REMOVE PERMISSION" },
          { id: "3", answer: "REVOKE" },
          { id: "4", answer: "DROP PRIVILEGE" },
        ],
        correctAnswer: [{ id: "3", answer: "REVOKE" }],
      },
      {
        id: "39",
        question: "Which statement is used to rename a table in SQL?",
        description:
          "The `ALTER TABLE RENAME TO` or simply `RENAME TABLE` (syntax varies slightly by database system) is used to change the name of an existing table.",
        options: [
          { id: "1", answer: "CHANGE TABLE" },
          { id: "2", answer: "MODIFY TABLE NAME" },
          { id: "3", answer: "RENAME TABLE" },
          { id: "4", answer: "ALTER TABLE RENAME" },
        ],
        correctAnswer: [{ id: "3", answer: "RENAME TABLE" }],
      },
      {
        id: "40",
        question: "What is the purpose of an `INDEX` in SQL?",
        description:
          "An `INDEX` is a special lookup table that the database search engine can use to speed up data retrieval. It is used to quickly locate data without having to search every row in a database table.",
        options: [
          { id: "1", answer: "To enforce unique values in a column." },
          { id: "2", answer: "To store backup copies of data." },
          { id: "3", answer: "To speed up data retrieval operations." },
          { id: "4", answer: "To prevent unauthorized access to data." },
        ],
        correctAnswer: [
          { id: "3", answer: "To speed up data retrieval operations." },
        ],
      },
      {
        id: "41",
        question: "Which SQL statement is used to create a view?",
        description:
          "A `VIEW` is a virtual table based on the result-set of a SQL statement. The `CREATE VIEW` statement is used to create it. A view contains rows and columns, just like a real table, but its data is not physically stored; it's derived from other tables.",
        options: [
          { id: "1", answer: "MAKE VIEW" },
          { id: "2", answer: "BUILD VIEW" },
          { id: "3", answer: "CREATE VIEW" },
          { id: "4", answer: "DEFINE VIEW" },
        ],
        correctAnswer: [{ id: "3", answer: "CREATE VIEW" }],
      },
      {
        id: "42",
        question: "What is a `JOIN` in SQL?",
        description:
          "A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them. It is a fundamental operation for querying data from multiple tables in a relational database.",
        options: [
          {
            id: "1",
            answer: "A statement to insert data into multiple tables.",
          },
          { id: "2", answer: "A clause to group rows with similar values." },
          {
            id: "3",
            answer: "A clause to combine rows from two or more tables.",
          },
          { id: "4", answer: "A command to create a new database." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A clause to combine rows from two or more tables.",
          },
        ],
      },
      {
        id: "43",
        question:
          "Which SQL statement is used to define a savepoint within a transaction?",
        description:
          "The `SAVEPOINT` command is used to set a savepoint within a transaction. This allows you to roll back a transaction to a specific point without rolling back the entire transaction.",
        options: [
          { id: "1", answer: "SET CHECKPOINT" },
          { id: "2", answer: "SET SAVEPOINT" },
          { id: "3", answer: "SAVEPOINT" },
          { id: "4", answer: "MARK TRANSACTION" },
        ],
        correctAnswer: [{ id: "3", answer: "SAVEPOINT" }],
      },
      {
        id: "44",
        question: "What is `ROLLBACK` used for?",
        description:
          "The `ROLLBACK` command is used to undo changes to the database since the last `COMMIT` or `SAVEPOINT`. It restores the database to a previous state, ensuring data integrity.",
        options: [
          { id: "1", answer: "To save changes to the database." },
          { id: "2", answer: "To commit changes to the database permanently." },
          {
            id: "3",
            answer:
              "To undo changes to the database since the last commit or savepoint.",
          },
          { id: "4", answer: "To create a backup of the database." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To undo changes to the database since the last commit or savepoint.",
          },
        ],
      },
      {
        id: "45",
        question: "What is `COMMIT` used for?",
        description:
          "The `COMMIT` command is used to save all changes made during the current transaction permanently to the database. Once committed, changes cannot be rolled back.",
        options: [
          { id: "1", answer: "To undo changes to the database." },
          {
            id: "2",
            answer:
              "To save all changes made during a transaction permanently.",
          },
          { id: "3", answer: "To start a new transaction." },
          { id: "4", answer: "To delete records from a table." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "To save all changes made during a transaction permanently.",
          },
        ],
      },
      {
        id: "46",
        question:
          "Which data type is used to store large binary data, such as images or multimedia files?",
        description:
          "The `BLOB` (Binary Large Object) data type is used to store large binary data, such as images, audio, video, or other arbitrary binary files, directly within the database.",
        options: [
          { id: "1", answer: "TEXT" },
          { id: "2", answer: "VARCHAR" },
          { id: "3", answer: "BLOB" },
          { id: "4", answer: "IMAGE" },
        ],
        correctAnswer: [{ id: "3", answer: "BLOB" }],
      },
      {
        id: "47",
        question: "Which data type is used to store dates and times?",
        description:
          "The `DATETIME` or `TIMESTAMP` data types (depending on the specific SQL dialect) are commonly used to store both date and time information. `DATE` stores only the date, and `TIME` stores only the time.",
        options: [
          { id: "1", answer: "TIME" },
          { id: "2", answer: "DATE" },
          { id: "3", answer: "YEAR" },
          { id: "4", answer: "DATETIME" },
        ],
        correctAnswer: [{ id: "4", answer: "DATETIME" }],
      },
      {
        id: "48",
        question:
          "Which data type is used to store character strings of varying length?",
        description:
          "The `VARCHAR` (Variable Character) data type is used to store character strings of varying length. It is more efficient than `CHAR` for variable-length strings as it only uses storage space for the actual characters plus a small overhead.",
        options: [
          { id: "1", answer: "CHAR" },
          { id: "2", answer: "TEXT" },
          { id: "3", answer: "NVARCHAR" },
          { id: "4", answer: "VARCHAR" },
        ],
        correctAnswer: [{ id: "4", answer: "VARCHAR" }],
      },
      {
        id: "49",
        question:
          "Which SQL clause is used to retrieve a specific number of rows from the beginning of the result set?",
        description:
          "The `LIMIT` clause (used in MySQL and PostgreSQL) or `TOP` clause (used in SQL Server) or `ROWNUM` (used in Oracle) is used to constrain the number of rows returned by a `SELECT` statement.",
        options: [
          { id: "1", answer: "FETCH" },
          { id: "2", answer: "SELECT TOP" },
          { id: "3", answer: "LIMIT" },
          { id: "4", answer: "FIRST" },
        ],
        correctAnswer: [{ id: "3", answer: "LIMIT" }],
      },
      {
        id: "50",
        question: "What is a 'Subquery' in SQL?",
        description:
          "A subquery (or inner query or nested query) is a query embedded inside another SQL query. It can be used in the `SELECT`, `FROM`, `WHERE`, and `HAVING` clauses and executes first, returning its result to the outer query.",
        options: [
          { id: "1", answer: "A query used for administrative tasks." },
          { id: "2", answer: "A query that retrieves data from a view." },
          { id: "3", answer: "A query embedded inside another SQL query." },
          {
            id: "4",
            answer:
              "A query that only performs data definition language operations.",
          },
        ],
        correctAnswer: [
          { id: "3", answer: "A query embedded inside another SQL query." },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Data Structures and Algorithms (Basics)",
    description:
      "Fundamental concepts for organizing and storing data, and step-by-step procedures for solving computational problems.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What is a 'Data Structure'?",
        description:
          "A data structure is a particular way of organizing data in a computer so that it can be used efficiently. It defines the relationship between the data and the operations that can be performed on the data.",
        options: [
          { id: "1", answer: "A programming language syntax." },
          { id: "2", answer: "A method of writing code quickly." },
          {
            id: "3",
            answer: "A particular way of organizing data in a computer.",
          },
          { id: "4", answer: "A software debugging technique." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A particular way of organizing data in a computer.",
          },
        ],
      },
      {
        id: "2",
        question: "What is an 'Algorithm'?",
        description:
          "An algorithm is a step-by-step procedure or formula for solving a problem, especially by a computer. It's a set of well-defined instructions to achieve a specific output for a given input.",
        options: [
          { id: "1", answer: "A programming error." },
          { id: "2", answer: "A type of computer hardware." },
          {
            id: "3",
            answer: "A step-by-step procedure for solving a problem.",
          },
          { id: "4", answer: "A graphical user interface." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A step-by-step procedure for solving a problem.",
          },
        ],
      },
      {
        id: "3",
        question:
          "Which data structure stores elements in a linear fashion, allowing access by index?",
        description:
          "An array is a collection of items stored at contiguous memory locations. It's one of the simplest data structures, where elements can be accessed using their index (position).",
        options: [
          { id: "1", answer: "Tree" },
          { id: "2", answer: "Graph" },
          { id: "3", answer: "Array" },
          { id: "4", answer: "Hash Table" },
        ],
        correctAnswer: [{ id: "3", answer: "Array" }],
      },
      {
        id: "4",
        question:
          "Which data structure follows the LIFO (Last In, First Out) principle?",
        description:
          "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means the last element added to the stack is the first one to be removed. Operations are typically `push` (add) and `pop` (remove).",
        options: [
          { id: "1", answer: "Queue" },
          { id: "2", answer: "Stack" },
          { id: "3", answer: "Linked List" },
          { id: "4", answer: "Array" },
        ],
        correctAnswer: [{ id: "2", answer: "Stack" }],
      },
      {
        id: "5",
        question:
          "Which data structure follows the FIFO (First In, First Out) principle?",
        description:
          "A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added to the queue is the first one to be removed. Operations are typically `enqueue` (add) and `dequeue` (remove).",
        options: [
          { id: "1", answer: "Stack" },
          { id: "2", answer: "Queue" },
          { id: "3", answer: "Tree" },
          { id: "4", answer: "Array" },
        ],
        correctAnswer: [{ id: "2", answer: "Queue" }],
      },
      {
        id: "6",
        question: "What is a 'Linked List'?",
        description:
          "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (node) stores a reference (pointer) to the next element in the sequence.",
        options: [
          { id: "1", answer: "A contiguous block of memory." },
          { id: "2", answer: "A list where elements are linked by pointers." },
          { id: "3", answer: "A collection of key-value pairs." },
          { id: "4", answer: "A hierarchical data structure." },
        ],
        correctAnswer: [
          { id: "2", answer: "A list where elements are linked by pointers." },
        ],
      },
      {
        id: "7",
        question:
          "Which sorting algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order?",
        description:
          "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. This process is repeated until no swaps are needed, indicating the list is sorted.",
        options: [
          { id: "1", answer: "Merge Sort" },
          { id: "2", answer: "Quick Sort" },
          { id: "3", answer: "Insertion Sort" },
          { id: "4", answer: "Bubble Sort" },
        ],
        correctAnswer: [{ id: "4", answer: "Bubble Sort" }],
      },
      {
        id: "8",
        question:
          "Which sorting algorithm selects the smallest element from the unsorted part and places it at the beginning?",
        description:
          "Selection Sort works by repeatedly finding the minimum element (considering ascending order) from the unsorted part of the list and putting it at the beginning of the sorted part. The algorithm maintains two subarrays in a given array: one already sorted and one unsorted.",
        options: [
          { id: "1", answer: "Quick Sort" },
          { id: "2", answer: "Selection Sort" },
          { id: "3", answer: "Bubble Sort" },
          { id: "4", answer: "Insertion Sort" },
        ],
        correctAnswer: [{ id: "2", answer: "Selection Sort" }],
      },
      {
        id: "9",
        question:
          "Which sorting algorithm builds the final sorted array (or list) one item at a time?",
        description:
          "Insertion Sort iterates, consuming one input element each repetition, and builds a sorted output list. At each iteration, the algorithm removes one element from the input data and inserts it into the correct position among the already sorted elements.",
        options: [
          { id: "1", answer: "Merge Sort" },
          { id: "2", answer: "Quick Sort" },
          { id: "3", answer: "Insertion Sort" },
          { id: "4", answer: "Selection Sort" },
        ],
        correctAnswer: [{ id: "3", answer: "Insertion Sort" }],
      },
      {
        id: "10",
        question:
          "Which searching algorithm finds the position of a target value within a sorted array?",
        description:
          "Binary Search is an efficient algorithm for finding an item from a *sorted* list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until it narrows down the possible locations to just one.",
        options: [
          { id: "1", answer: "Linear Search" },
          { id: "2", answer: "Hash Search" },
          { id: "3", answer: "Binary Search" },
          { id: "4", answer: "Tree Search" },
        ],
        correctAnswer: [{ id: "3", answer: "Binary Search" }],
      },
      {
        id: "11",
        question: "What is 'Big O' notation used for?",
        description:
          "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms by how their running time or space requirements grow as the input size grows.",
        options: [
          {
            id: "1",
            answer: "To measure the exact execution time of an algorithm.",
          },
          {
            id: "2",
            answer: "To describe the worst-case complexity of an algorithm.",
          },
          {
            id: "3",
            answer: "To define the memory consumption of a program precisely.",
          },
          { id: "4", answer: "To specify the syntax of a data structure." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "To describe the worst-case complexity of an algorithm.",
          },
        ],
      },
      {
        id: "12",
        question:
          "What is the time complexity of searching an element in a sorted array using Binary Search?",
        description:
          "Binary Search works by repeatedly halving the search interval. This logarithmic reduction in search space leads to a time complexity of O(log n), where n is the number of elements in the array.",
        options: [
          { id: "1", answer: "O(n)" },
          { id: "2", answer: "O(n log n)" },
          { id: "3", answer: "O(1)" },
          { id: "4", answer: "O(log n)" },
        ],
        correctAnswer: [{ id: "4", answer: "O(log n)" }],
      },
      {
        id: "13",
        question:
          "What is the time complexity of accessing an element by index in an Array?",
        description:
          "Accessing an element by its index in an array takes constant time, regardless of the array's size, because the memory address can be calculated directly. Thus, the time complexity is O(1).",
        options: [
          { id: "1", answer: "O(n)" },
          { id: "2", answer: "O(log n)" },
          { id: "3", answer: "O(n^2)" },
          { id: "4", answer: "O(1)" },
        ],
        correctAnswer: [{ id: "4", answer: "O(1)" }],
      },
      {
        id: "14",
        question:
          "Which data structure allows for efficient insertion and deletion at both ends?",
        description:
          "A Deque (Double-Ended Queue) is a linear data structure that supports element insertion and deletion from both ends. Unlike a traditional queue or stack, it offers more flexibility in adding and removing items.",
        options: [
          { id: "1", answer: "Stack" },
          { id: "2", answer: "Queue" },
          { id: "3", answer: "Deque" },
          { id: "4", answer: "Array" },
        ],
        correctAnswer: [{ id: "3", answer: "Deque" }],
      },
      {
        id: "15",
        question: "What is a 'Tree' data structure?",
        description:
          "A tree is a non-linear hierarchical data structure that consists of nodes connected by edges. It has a root node, and each node can have zero or more child nodes, but each child node has exactly one parent node.",
        options: [
          { id: "1", answer: "A linear collection of elements." },
          { id: "2", answer: "A data structure based on the LIFO principle." },
          {
            id: "3",
            answer:
              "A hierarchical data structure with a root node and child nodes.",
          },
          { id: "4", answer: "A collection of unique key-value pairs." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A hierarchical data structure with a root node and child nodes.",
          },
        ],
      },
      {
        id: "16",
        question: "What is a 'Binary Tree'?",
        description:
          "A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.",
        options: [
          { id: "1", answer: "A tree with only two nodes." },
          {
            id: "2",
            answer: "A tree where each node has at most two children.",
          },
          { id: "3", answer: "A tree used for binary code representation." },
          { id: "4", answer: "A tree that stores only binary values." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "A tree where each node has at most two children.",
          },
        ],
      },
      {
        id: "17",
        question: "What is a 'Binary Search Tree' (BST)?",
        description:
          "A Binary Search Tree is a special type of binary tree where for each node, all nodes in its left subtree have values less than the node's value, and all nodes in its right subtree have values greater than the node's value. This property allows for efficient searching, insertion, and deletion.",
        options: [
          { id: "1", answer: "A binary tree used for searching only." },
          {
            id: "2",
            answer: "A binary tree where elements are stored in random order.",
          },
          {
            id: "3",
            answer:
              "A binary tree with specific ordering properties for efficient search.",
          },
          {
            id: "4",
            answer: "A tree where each node has exactly two children.",
          },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A binary tree with specific ordering properties for efficient search.",
          },
        ],
      },
      {
        id: "18",
        question:
          "Which data structure uses a hash function to map keys to values for efficient lookups?",
        description:
          "A Hash Table (also known as Hash Map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.",
        options: [
          { id: "1", answer: "Array" },
          { id: "2", answer: "Linked List" },
          { id: "3", answer: "Hash Table" },
          { id: "4", answer: "Tree" },
        ],
        correctAnswer: [{ id: "3", answer: "Hash Table" }],
      },
      {
        id: "19",
        question: "What is 'collision' in a hash table?",
        description:
          "A collision occurs in a hash table when two different keys hash to the same index (or bucket) in the hash table. Collision resolution techniques (like separate chaining or open addressing) are used to handle this.",
        options: [
          { id: "1", answer: "When two keys have different hash values." },
          { id: "2", answer: "When the hash table is full." },
          {
            id: "3",
            answer: "When two different keys hash to the same index.",
          },
          { id: "4", answer: "When data is corrupted in the table." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "When two different keys hash to the same index.",
          },
        ],
      },
      {
        id: "20",
        question:
          "Which graph traversal algorithm explores as far as possible along each branch before backtracking?",
        description:
          "Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root (or any arbitrary node) and explores as far as possible along each branch before backtracking. It typically uses a stack (implicitly or explicitly).",
        options: [
          { id: "1", answer: "Breadth-First Search" },
          { id: "2", answer: "Dijkstra's Algorithm" },
          { id: "3", answer: "Depth-First Search" },
          { id: "4", answer: "Prim's Algorithm" },
        ],
        correctAnswer: [{ id: "3", answer: "Depth-First Search" }],
      },
      {
        id: "21",
        question:
          "Which graph traversal algorithm explores all the neighbor nodes at the present depth level before moving on to nodes at the next depth level?",
        description:
          "Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores all of the neighbor nodes at the present depth before moving on to the nodes at the next depth level. It typically uses a queue.",
        options: [
          { id: "1", answer: "Depth-First Search" },
          { id: "2", answer: "Breadth-First Search" },
          { id: "3", answer: "A* Search" },
          { id: "4", answer: "Greedy Search" },
        ],
        correctAnswer: [{ id: "2", answer: "Breadth-First Search" }],
      },
      {
        id: "22",
        question:
          "What is the primary characteristic of a 'Heap' data structure?",
        description:
          "A Heap is a specialized tree-based data structure that satisfies the heap property: if it's a Min-Heap, the parent's value is less than or equal to its children; if it's a Max-Heap, the parent's value is greater than or equal to its children. It's often implemented with an array and used for priority queues.",
        options: [
          { id: "1", answer: "Elements are always sorted in ascending order." },
          {
            id: "2",
            answer: "It is a linear data structure with FIFO access.",
          },
          {
            id: "3",
            answer:
              "It maintains a heap property (parent-child relationship) for efficient min/max retrieval.",
          },
          { id: "4", answer: "It stores unique key-value pairs." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "It maintains a heap property (parent-child relationship) for efficient min/max retrieval.",
          },
        ],
      },
      {
        id: "23",
        question:
          "Which algorithm paradigm solves problems by breaking them down into smaller subproblems, solving each subproblem, and storing the results to avoid recomputation?",
        description:
          "Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It solves each subproblem once and stores their solutions – typically in a table – to avoid recomputing them when the same subproblem occurs again.",
        options: [
          { id: "1", answer: "Divide and Conquer" },
          { id: "2", answer: "Greedy Algorithm" },
          { id: "3", answer: "Backtracking" },
          { id: "4", answer: "Dynamic Programming" },
        ],
        correctAnswer: [{ id: "4", answer: "Dynamic Programming" }],
      },
      {
        id: "24",
        question:
          "Which algorithm paradigm works by repeatedly reducing a problem into two or more smaller subproblems of the same (or similar) type until these become simple enough to be solved directly?",
        description:
          "Divide and Conquer is an algorithm design paradigm. A divide-and-conquer algorithm recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.",
        options: [
          { id: "1", answer: "Dynamic Programming" },
          { id: "2", answer: "Greedy Algorithm" },
          { id: "3", answer: "Backtracking" },
          { id: "4", answer: "Divide and Conquer" },
        ],
        correctAnswer: [{ id: "4", answer: "Divide and Conquer" }],
      },
      {
        id: "25",
        question: "What is a 'Graph' data structure?",
        description:
          "A graph is a non-linear data structure consisting of nodes (vertices) and edges (connections between nodes). It can represent various real-world networks like social networks, road maps, etc.",
        options: [
          { id: "1", answer: "A hierarchical structure like a family tree." },
          { id: "2", answer: "A linear collection of elements." },
          {
            id: "3",
            answer: "A collection of nodes (vertices) and connections (edges).",
          },
          { id: "4", answer: "A list that sorts itself automatically." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A collection of nodes (vertices) and connections (edges).",
          },
        ],
      },
      {
        id: "26",
        question: "What is the worst-case time complexity of Bubble Sort?",
        description:
          "In the worst-case scenario (e.g., a reverse-sorted array), Bubble Sort makes multiple passes, and in each pass, it compares and potentially swaps elements. This leads to a quadratic time complexity of O(n^2).",
        options: [
          { id: "1", answer: "O(n)" },
          { id: "2", answer: "O(n log n)" },
          { id: "3", answer: "O(log n)" },
          { id: "4", answer: "O(n^2)" },
        ],
        correctAnswer: [{ id: "4", answer: "O(n^2)" }],
      },
      {
        id: "27",
        question:
          "Which algorithm is typically used to find the shortest path in a graph with non-negative edge weights?",
        description:
          "Dijkstra's Algorithm is a greedy algorithm that finds the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights. It is widely used in network routing protocols.",
        options: [
          { id: "1", answer: "Bellman-Ford Algorithm" },
          { id: "2", answer: "Floyd-Warshall Algorithm" },
          { id: "3", answer: "Prim's Algorithm" },
          { id: "4", answer: "Dijkstra's Algorithm" },
        ],
        correctAnswer: [{ id: "4", answer: "Dijkstra's Algorithm" }],
      },
      {
        id: "28",
        question: "What is 'Recursion' in programming?",
        description:
          "Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem. It breaks down a problem into smaller instances of the same problem until a base case is reached.",
        options: [
          { id: "1", answer: "A loop that never ends." },
          {
            id: "2",
            answer: "A function that avoids calling other functions.",
          },
          {
            id: "3",
            answer: "A function that calls itself to solve a problem.",
          },
          { id: "4", answer: "A method to optimize memory usage." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A function that calls itself to solve a problem.",
          },
        ],
      },
      {
        id: "29",
        question: "What is the base case in recursion?",
        description:
          "The base case in recursion is the condition that stops the recursive calls from continuing indefinitely. Without a proper base case, a recursive function would lead to infinite recursion and a stack overflow error.",
        options: [
          { id: "1", answer: "The first call to the function." },
          { id: "2", answer: "The condition that stops the recursion." },
          { id: "3", answer: "The error message when recursion fails." },
          { id: "4", answer: "The main function that initiates recursion." },
        ],
        correctAnswer: [
          { id: "2", answer: "The condition that stops the recursion." },
        ],
      },
      {
        id: "30",
        question:
          "Which data structure is suitable for implementing a 'Undo' functionality in a text editor?",
        description:
          "A Stack is ideal for implementing 'Undo' functionality because it follows the LIFO principle. Each action performed is `pushed` onto the stack, and when 'Undo' is clicked, the last action is `popped` off, effectively reversing it.",
        options: [
          { id: "1", answer: "Queue" },
          { id: "2", answer: "Linked List" },
          { id: "3", answer: "Stack" },
          { id: "4", answer: "Hash Table" },
        ],
        correctAnswer: [{ id: "3", answer: "Stack" }],
      },
      {
        id: "31",
        question:
          "Which data structure is best for managing tasks in a CPU scheduler, processing them in the order they arrive?",
        description:
          "A Queue is ideal for managing tasks in a CPU scheduler because it follows the FIFO principle. Tasks are `enqueued` as they arrive and `dequeued` for processing in the same order.",
        options: [
          { id: "1", answer: "Stack" },
          { id: "2", answer: "Hash Table" },
          { id: "3", answer: "Queue" },
          { id: "4", answer: "Binary Search Tree" },
        ],
        correctAnswer: [{ id: "3", answer: "Queue" }],
      },
      {
        id: "32",
        question:
          "What is the primary difference between a 'singly linked list' and a 'doubly linked list'?",
        description:
          "In a singly linked list, each node contains a pointer to the next node only. In a doubly linked list, each node contains pointers to both the next node and the previous node, allowing traversal in both directions.",
        options: [
          { id: "1", answer: "Singly linked lists are faster." },
          { id: "2", answer: "Doubly linked lists have only one head node." },
          {
            id: "3",
            answer:
              "Doubly linked lists have pointers to both next and previous nodes.",
          },
          { id: "4", answer: "Singly linked lists can only store numbers." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Doubly linked lists have pointers to both next and previous nodes.",
          },
        ],
      },
      {
        id: "33",
        question: "What does a 'circular linked list' imply?",
        description:
          "A circular linked list is a variation of a linked list in which the last node points back to the first node, forming a circle. This means there is no NULL termination.",
        options: [
          { id: "1", answer: "The list can only be traversed once." },
          { id: "2", answer: "The first node points to the last node." },
          { id: "3", answer: "The last node points back to the first node." },
          { id: "4", answer: "The list elements are numbers." },
        ],
        correctAnswer: [
          { id: "3", answer: "The last node points back to the first node." },
        ],
      },
      {
        id: "34",
        question:
          "Which tree traversal method visits the left subtree, then the root, then the right subtree?",
        description:
          "In-order traversal is a depth-first traversal strategy for binary trees where the left subtree is visited first, then the root node, and finally the right subtree. For a Binary Search Tree (BST), an in-order traversal visits nodes in ascending order.",
        options: [
          { id: "1", answer: "Pre-order" },
          { id: "2", answer: "Post-order" },
          { id: "3", answer: "In-order" },
          { id: "4", answer: "Level-order" },
        ],
        correctAnswer: [{ id: "3", answer: "In-order" }],
      },
      {
        id: "35",
        question:
          "Which tree traversal method visits the root, then the left subtree, then the right subtree?",
        description:
          "Pre-order traversal visits the root node first, then recursively traverses the left subtree, and finally recursively traverses the right subtree.",
        options: [
          { id: "1", answer: "In-order" },
          { id: "2", answer: "Post-order" },
          { id: "3", answer: "Pre-order" },
          { id: "4", answer: "Level-order" },
        ],
        correctAnswer: [{ id: "3", answer: "Pre-order" }],
      },
      {
        id: "36",
        question:
          "Which tree traversal method visits the left subtree, then the right subtree, then the root?",
        description:
          "Post-order traversal recursively traverses the left subtree, then recursively traverses the right subtree, and finally visits the root node.",
        options: [
          { id: "1", answer: "In-order" },
          { id: "2", answer: "Pre-order" },
          { id: "3", answer: "Post-order" },
          { id: "4", answer: "Level-order" },
        ],
        correctAnswer: [{ id: "3", answer: "Post-order" }],
      },
      {
        id: "37",
        question:
          "What is the average time complexity of insertion into a balanced Binary Search Tree?",
        description:
          "In a balanced Binary Search Tree (like an AVL tree or Red-Black tree), the height of the tree is logarithmic to the number of nodes. Insertion involves traversing down the tree, leading to an average time complexity of O(log n).",
        options: [
          { id: "1", answer: "O(n)" },
          { id: "2", answer: "O(n^2)" },
          { id: "3", answer: "O(1)" },
          { id: "4", answer: "O(log n)" },
        ],
        correctAnswer: [{ id: "4", answer: "O(log n)" }],
      },
      {
        id: "38",
        question:
          "What is the worst-case time complexity of searching in an unsorted array (Linear Search)?",
        description:
          "In the worst case for a Linear Search, the target element is at the very end of the array or not present at all. This requires checking every element, leading to a time complexity directly proportional to the number of elements, O(n).",
        options: [
          { id: "1", answer: "O(1)" },
          { id: "2", answer: "O(log n)" },
          { id: "3", answer: "O(n)" },
          { id: "4", answer: "O(n^2)" },
        ],
        correctAnswer: [{ id: "3", answer: "O(n)" }],
      },
      {
        id: "39",
        question:
          "Which concept allows an object to take on many forms, enabling a single interface for different data types?",
        description:
          "Polymorphism (from Greek 'poly' many, 'morph' form) is a principle in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for different data types.",
        options: [
          { id: "1", answer: "Encapsulation" },
          { id: "2", answer: "Inheritance" },
          { id: "3", answer: "Abstraction" },
          { id: "4", answer: "Polymorphism" },
        ],
        correctAnswer: [{ id: "4", answer: "Polymorphism" }],
      },
      {
        id: "40",
        question: "What is 'Encapsulation' in Object-Oriented Programming?",
        description:
          "Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit or class, and restricting direct access to some of the object's components. This prevents external code from directly manipulating an object's internal state.",
        options: [
          { id: "1", answer: "Creating multiple objects from a single class." },
          {
            id: "2",
            answer:
              "Hiding the internal state and requiring interaction through public methods.",
          },
          {
            id: "3",
            answer:
              "Allowing a class to inherit properties from another class.",
          },
          {
            id: "4",
            answer: "Defining a common interface for different data types.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Hiding the internal state and requiring interaction through public methods.",
          },
        ],
      },
      {
        id: "41",
        question: "What is 'Inheritance' in Object-Oriented Programming?",
        description:
          "Inheritance is a mechanism in which one class (subclass/derived class) acquires the properties and behaviors (fields and methods) of another class (superclass/base class). It promotes code reusability.",
        options: [
          { id: "1", answer: "Bundling data and methods into a single unit." },
          { id: "2", answer: "The process of hiding implementation details." },
          {
            id: "3",
            answer:
              "A mechanism where one class acquires properties of another class.",
          },
          { id: "4", answer: "Allowing objects to take on many forms." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A mechanism where one class acquires properties of another class.",
          },
        ],
      },
      {
        id: "42",
        question:
          "What is the primary benefit of using a Hash Table for data storage and retrieval?",
        description:
          "Hash tables offer average-case O(1) time complexity for insertion, deletion, and retrieval operations, making them extremely efficient for lookups when collisions are handled effectively.",
        options: [
          { id: "1", answer: "Guaranteed sorted order of elements." },
          { id: "2", answer: "Efficient use of memory for all operations." },
          {
            id: "3",
            answer: "Fast average-case time complexity for lookups (O(1)).",
          },
          { id: "4", answer: "Easy implementation for beginners." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Fast average-case time complexity for lookups (O(1)).",
          },
        ],
      },
      {
        id: "43",
        question:
          "Which algorithm is used to find the minimum spanning tree in a graph?",
        description:
          "Both Prim's Algorithm and Kruskal's Algorithm are greedy algorithms used to find the Minimum Spanning Tree (MST) of a connected, undirected graph with edge weights.",
        options: [
          { id: "1", answer: "Dijkstra's Algorithm" },
          { id: "2", answer: "Bellman-Ford Algorithm" },
          { id: "3", answer: "Prim's Algorithm" },
          { id: "4", answer: "Breadth-First Search" },
        ],
        correctAnswer: [{ id: "3", answer: "Prim's Algorithm" }],
      },
      {
        id: "44",
        question:
          "What is the concept of 'memoization' in dynamic programming?",
        description:
          "Memoization is an optimization technique used primarily in dynamic programming and functional programming. It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again, to avoid redundant computations.",
        options: [
          {
            id: "1",
            answer: "Breaking a problem into smaller, independent subproblems.",
          },
          {
            id: "2",
            answer:
              "Storing the results of expensive function calls to avoid recomputation.",
          },
          {
            id: "3",
            answer: "Converting recursive algorithms to iterative ones.",
          },
          {
            id: "4",
            answer: "Solving problems by making locally optimal choices.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Storing the results of expensive function calls to avoid recomputation.",
          },
        ],
      },
      {
        id: "45",
        question:
          "What is the difference between an 'array' and a 'linked list' in terms of memory allocation?",
        description:
          "Arrays store elements in contiguous memory locations, allowing direct access via indexing. Linked lists store elements non-contiguously; each element contains a pointer to the next, requiring traversal for access.",
        options: [
          {
            id: "1",
            answer: "Arrays use dynamic memory, linked lists use static.",
          },
          {
            id: "2",
            answer:
              "Arrays store elements contiguously, linked lists store them non-contiguously.",
          },
          {
            id: "3",
            answer: "Linked lists are always smaller in memory than arrays.",
          },
          {
            id: "4",
            answer: "There is no significant difference in memory allocation.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Arrays store elements contiguously, linked lists store them non-contiguously.",
          },
        ],
      },
      {
        id: "46",
        question: "What is the best case time complexity for Quick Sort?",
        description:
          "The best case for Quick Sort occurs when the pivot element always divides the array into two (nearly) equal halves. This leads to a time complexity of O(n log n).",
        options: [
          { id: "1", answer: "O(n^2)" },
          { id: "2", answer: "O(n)" },
          { id: "3", answer: "O(log n)" },
          { id: "4", answer: "O(n log n)" },
        ],
        correctAnswer: [{ id: "4", answer: "O(n log n)" }],
      },
      {
        id: "47",
        question: "What is the worst-case time complexity for Quick Sort?",
        description:
          "The worst case for Quick Sort occurs when the pivot element consistently results in highly unbalanced partitions (e.g., always picking the smallest or largest element). This can degrade the performance to O(n^2).",
        options: [
          { id: "1", answer: "O(n log n)" },
          { id: "2", answer: "O(n)" },
          { id: "3", answer: "O(log n)" },
          { id: "4", answer: "O(n^2)" },
        ],
        correctAnswer: [{ id: "4", answer: "O(n^2)" }],
      },
      {
        id: "48",
        question:
          "Which sorting algorithm is a stable, comparison-based algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves?",
        description:
          "Merge Sort is a stable, comparison-based sorting algorithm that employs the divide and conquer paradigm. It recursively divides the array into halves until individual elements are reached, then merges these sorted halves back together.",
        options: [
          { id: "1", answer: "Quick Sort" },
          { id: "2", answer: "Bubble Sort" },
          { id: "3", answer: "Selection Sort" },
          { id: "4", answer: "Merge Sort" },
        ],
        correctAnswer: [{ id: "4", answer: "Merge Sort" }],
      },
      {
        id: "49",
        question:
          "What is a 'Trie' (prefix tree) data structure primarily used for?",
        description:
          "A Trie, also known as a prefix tree, is a tree-like data structure used to store a dynamic set or associative array where the keys are usually strings. It is highly efficient for prefix-based searches and autocomplete features.",
        options: [
          { id: "1", answer: "Storing numerical data in sorted order." },
          {
            id: "2",
            answer:
              "Efficiently checking for string prefixes and autocomplete.",
          },
          { id: "3", answer: "Managing LIFO operations." },
          { id: "4", answer: "Representing social networks." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Efficiently checking for string prefixes and autocomplete.",
          },
        ],
      },
      {
        id: "50",
        question: "What is 'Time Complexity' in the context of algorithms?",
        description:
          "Time complexity is a measure of the amount of time taken by an algorithm to run as a function of the length of the input. It doesn't measure the actual time but rather how the running time grows with the input size, typically expressed using Big O notation.",
        options: [
          {
            id: "1",
            answer: "The exact number of seconds an algorithm takes to run.",
          },
          { id: "2", answer: "The amount of memory an algorithm uses." },
          {
            id: "3",
            answer:
              "A measure of how the running time of an algorithm grows with input size.",
          },
          { id: "4", answer: "The number of lines of code in an algorithm." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A measure of how the running time of an algorithm grows with input size.",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "React.js (Basics)",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces, focusing on component-based architecture and virtual DOM.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "React.js is primarily used for building what?",
        description:
          "React.js is a JavaScript library specifically designed and optimized for building user interfaces (UIs) or UI components.",
        options: [
          { id: "1", answer: "Databases" },
          { id: "2", answer: "Operating Systems" },
          { id: "3", answer: "User Interfaces" },
          { id: "4", answer: "Backend APIs" },
        ],
        correctAnswer: [{ id: "3", answer: "User Interfaces" }],
      },
      {
        id: "2",
        question: "What is JSX in React?",
        description:
          "JSX (JavaScript XML) is a syntax extension for JavaScript. It's used with React to describe what the UI should look like, allowing HTML-like syntax to be written directly within JavaScript code.",
        options: [
          { id: "1", answer: "A new programming language." },
          { id: "2", answer: "A templating engine for backend." },
          {
            id: "3",
            answer:
              "A syntax extension for JavaScript, allowing HTML-like code in React.",
          },
          { id: "4", answer: "A CSS preprocessor." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A syntax extension for JavaScript, allowing HTML-like code in React.",
          },
        ],
      },
      {
        id: "3",
        question: "Which command is used to create a new React project?",
        description:
          "`create-react-app` is a widely used command-line tool that sets up a new React project with a sensible default configuration, allowing developers to focus on coding rather than build tools.",
        options: [
          { id: "1", answer: "npm start react-app" },
          { id: "2", answer: "npm init react" },
          { id: "3", answer: "npx create-react-app" },
          { id: "4", answer: "yarn new react-project" },
        ],
        correctAnswer: [{ id: "3", answer: "npx create-react-app" }],
      },
      {
        id: "4",
        question: "What is the Virtual DOM in React?",
        description:
          "The Virtual DOM (VDOM) is a lightweight copy of the actual DOM. React uses it to efficiently update the UI. When state changes, React first updates the VDOM, then compares it to the previous VDOM to find differences, and finally updates only the necessary parts of the real DOM.",
        options: [
          { id: "1", answer: "A direct representation of the HTML document." },
          { id: "2", answer: "A server-side rendering mechanism." },
          {
            id: "3",
            answer:
              "A lightweight copy of the actual DOM for efficient updates.",
          },
          { id: "4", answer: "A styling method for React components." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A lightweight copy of the actual DOM for efficient updates.",
          },
        ],
      },
      {
        id: "5",
        question: "How do you embed JavaScript expressions in JSX?",
        description:
          "In JSX, you embed JavaScript expressions by enclosing them in curly braces `{}`. This allows you to dynamically render values, call functions, or include any valid JavaScript expression within your JSX.",
        options: [
          { id: "1", answer: "Using parentheses `()`" },
          { id: "2", answer: "Using square brackets `[]`" },
          { id: "3", answer: "Using curly braces `{}`" },
          { id: "4", answer: 'Using double quotes `""`' },
        ],
        correctAnswer: [{ id: "3", answer: "Using curly braces `{}`" }],
      },
      {
        id: "6",
        question: "What is a 'component' in React?",
        description:
          "A component is a self-contained, reusable piece of code that represents a part of the user interface. React applications are built by composing multiple components.",
        options: [
          { id: "1", answer: "A global variable." },
          { id: "2", answer: "A styling rule." },
          { id: "3", answer: "A reusable, self-contained piece of UI." },
          { id: "4", answer: "A database connection." },
        ],
        correctAnswer: [
          { id: "3", answer: "A reusable, self-contained piece of UI." },
        ],
      },
      {
        id: "7",
        question: "What are 'props' in React?",
        description:
          "Props (short for properties) are a mechanism for passing data from a parent component to a child component. They are read-only and allow components to communicate information down the component tree.",
        options: [
          { id: "1", answer: "Local variables within a component." },
          { id: "2", answer: "Internal state of a component." },
          {
            id: "3",
            answer:
              "Arguments passed to a function component or attributes to a class component.",
          },
          { id: "4", answer: "Event handlers." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Arguments passed to a function component or attributes to a class component.",
          },
        ],
      },
      {
        id: "8",
        question: "What is 'state' in React?",
        description:
          "State is an internal data store within a component that can change over time. When the state changes, the component re-renders. It's used for managing data that is mutable and relevant to a component's lifecycle.",
        options: [
          { id: "1", answer: "External data passed from parent components." },
          { id: "2", answer: "A permanent storage solution." },
          {
            id: "3",
            answer:
              "An internal data store that manages mutable data within a component.",
          },
          { id: "4", answer: "A static value that never changes." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "An internal data store that manages mutable data within a component.",
          },
        ],
      },
      {
        id: "9",
        question:
          "Which hook is used to add state to functional components in React?",
        description:
          "The `useState` hook is a fundamental React Hook that allows functional components to have state. It returns a stateful value and a function to update it.",
        options: [
          { id: "1", answer: "useEffect" },
          { id: "2", answer: "useContext" },
          { id: "3", answer: "useState" },
          { id: "4", answer: "useRef" },
        ],
        correctAnswer: [{ id: "3", answer: "useState" }],
      },
      {
        id: "10",
        question:
          "Which hook is used for side effects in functional components (e.g., data fetching, subscriptions)?",
        description:
          "The `useEffect` hook allows you to perform side effects in functional components, such as data fetching, direct DOM manipulation, or setting up subscriptions. It runs after every render of the component, by default.",
        options: [
          { id: "1", answer: "useState" },
          { id: "2", answer: "useMemo" },
          { id: "3", answer: "useEffect" },
          { id: "4", answer: "useCallback" },
        ],
        correctAnswer: [{ id: "3", answer: "useEffect" }],
      },
      {
        id: "11",
        question: "What is 'Unidirectional Data Flow' in React?",
        description:
          "Unidirectional data flow means that data in React flows in a single direction, from parent components down to child components via props. This makes the data flow predictable and easier to debug.",
        options: [
          { id: "1", answer: "Data can flow in any direction." },
          { id: "2", answer: "Data only flows from child to parent." },
          {
            id: "3",
            answer: "Data flows in a single direction, from parent to child.",
          },
          { id: "4", answer: "Data flow is controlled by Redux only." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Data flows in a single direction, from parent to child.",
          },
        ],
      },
      {
        id: "12",
        question:
          "What is the correct way to update state in a functional component using `useState`?",
        description:
          "The `useState` hook returns an array with two elements: the current state value and a `setter` function. To update the state, you must call the setter function, which triggers a re-render.",
        options: [
          { id: "1", answer: "this.state.count = 5;" },
          { id: "2", answer: "count = 5;" },
          { id: "3", answer: "setCount(5);" },
          { id: "4", answer: "updateCount(5);" },
        ],
        correctAnswer: [{ id: "3", answer: "setCount(5);" }],
      },
      {
        id: "13",
        question:
          "Which lifecycle method in a class component is invoked immediately after a component is mounted?",
        description:
          "`componentDidMount` is a lifecycle method in class components that is called immediately after a component is rendered and mounted into the DOM. It's a good place for network requests or DOM manipulations that require the component to be rendered.",
        options: [
          { id: "1", answer: "componentWillMount" },
          { id: "2", answer: "render" },
          { id: "3", answer: "componentDidUpdate" },
          { id: "4", answer: "componentDidMount" },
        ],
        correctAnswer: [{ id: "4", answer: "componentDidMount" }],
      },
      {
        id: "14",
        question: "What is 'reconciliation' in React?",
        description:
          "Reconciliation is the process by which React updates the DOM. When a component's state or props change, React compares the new Virtual DOM tree with the previous one to find the most efficient way to update the actual DOM.",
        options: [
          { id: "1", answer: "The process of installing React libraries." },
          {
            id: "2",
            answer:
              "The process of comparing the Virtual DOM with the real DOM to apply updates.",
          },
          { id: "3", answer: "The initial rendering of a component." },
          { id: "4", answer: "A method for handling component errors." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "The process of comparing the Virtual DOM with the real DOM to apply updates.",
          },
        ],
      },
      {
        id: "15",
        question: "What is a 'key' prop used for in React lists?",
        description:
          "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings to help React reorder elements efficiently and avoid issues with state and component identity when lists change.",
        options: [
          { id: "1", answer: "To style list items." },
          {
            id: "2",
            answer:
              "To provide a unique identifier for each list item for React's reconciliation.",
          },
          { id: "3", answer: "To hide list items from the DOM." },
          { id: "4", answer: "To define the order of list items permanently." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "To provide a unique identifier for each list item for React's reconciliation.",
          },
        ],
      },
      {
        id: "16",
        question: "How do you handle events in React (e.g., a button click)?",
        description:
          "Event handlers in React are typically written as camelCase and passed directly as a prop to the DOM element. For example, `onClick={handleClick}` where `handleClick` is a JavaScript function.",
        options: [
          {
            id: "1",
            answer: "Using `addEventListener` directly on DOM elements.",
          },
          {
            id: "2",
            answer:
              "By defining inline HTML attributes like `onclick='myFunction()'`.",
          },
          {
            id: "3",
            answer:
              "By passing a function directly to an event prop like `onClick={handleClick}`.",
          },
          { id: "4", answer: "React does not support event handling." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "By passing a function directly to an event prop like `onClick={handleClick}`.",
          },
        ],
      },
      {
        id: "17",
        question: "What is 'lifting state up' in React?",
        description:
          "Lifting state up is a pattern where if several child components need to share the same state, that state is 'lifted' to their closest common ancestor. The parent component then passes the state and update functions down to the children as props.",
        options: [
          { id: "1", answer: "Moving a component higher in the DOM tree." },
          {
            id: "2",
            answer:
              "Moving state from a child component to its closest common parent.",
          },
          { id: "3", answer: "Using a global state management library." },
          {
            id: "4",
            answer: "Increasing the number of state variables in a component.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Moving state from a child component to its closest common parent.",
          },
        ],
      },
      {
        id: "18",
        question: "What is 'conditional rendering' in React?",
        description:
          "Conditional rendering in React allows you to render different elements or components based on certain conditions. This is achieved using JavaScript conditional operators (like `if`, `&&`, `? :`).",
        options: [
          {
            id: "1",
            answer:
              "Rendering components only when the internet connection is stable.",
          },
          {
            id: "2",
            answer:
              "Rendering different components or elements based on a condition.",
          },
          { id: "3", answer: "Rendering components randomly." },
          { id: "4", answer: "Rendering components only once." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Rendering different components or elements based on a condition.",
          },
        ],
      },
      {
        id: "19",
        question: "What is the purpose of `React.Fragment`?",
        description:
          "`React.Fragment` (or `<>...</>`) allows you to group multiple elements without adding an extra node to the DOM. This is useful when a component needs to return multiple elements, but you don't want to wrap them in an unnecessary `<div>`.",
        options: [
          { id: "1", answer: "To create a new component." },
          { id: "2", answer: "To add styling to a component." },
          {
            id: "3",
            answer:
              "To group multiple elements without adding an extra DOM node.",
          },
          { id: "4", answer: "To define a reusable piece of logic." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To group multiple elements without adding an extra DOM node.",
          },
        ],
      },
      {
        id: "20",
        question: "What is a 'controlled component' in React forms?",
        description:
          "In a controlled component, the form data is handled by React state. The component's state is the 'single source of truth' for the input elements, and every state mutation will have an associated handler function.",
        options: [
          {
            id: "1",
            answer: "A form input element whose value is managed by the DOM.",
          },
          {
            id: "2",
            answer:
              "A form input element whose value is managed by React state.",
          },
          { id: "3", answer: "A component that has no state." },
          { id: "4", answer: "A component that fetches data from an API." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A form input element whose value is managed by React state.",
          },
        ],
      },
      {
        id: "21",
        question: "What is an 'uncontrolled component' in React forms?",
        description:
          "In an uncontrolled component, the form data is handled by the DOM itself. Refs are used to get form values directly from the DOM elements, bypassing React state management for those inputs.",
        options: [
          {
            id: "1",
            answer:
              "A form input element whose value is managed by React state.",
          },
          {
            id: "2",
            answer: "A form input element whose value is managed by the DOM.",
          },
          { id: "3", answer: "A component that controls other components." },
          { id: "4", answer: "A component that is rendered only once." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "A form input element whose value is managed by the DOM.",
          },
        ],
      },
      {
        id: "22",
        question: "What is the purpose of `ReactDOM.render()`?",
        description:
          "`ReactDOM.render()` is the method responsible for rendering a React element (or component) into a root DOM node in the browser. It's the entry point for mounting React applications to the DOM.",
        options: [
          { id: "1", answer: "To create a new React component." },
          { id: "2", answer: "To update the state of a component." },
          { id: "3", answer: "To render a React element into the DOM." },
          { id: "4", answer: "To define the styling of a React app." },
        ],
        correctAnswer: [
          { id: "3", answer: "To render a React element into the DOM." },
        ],
      },
      {
        id: "23",
        question:
          "What is the typical entry point file for a React application created with Create React App?",
        description:
          "For applications created with Create React App, `src/index.js` is the conventional entry point. It's where `ReactDOM.render()` is typically called to render the main `App` component into the root HTML element.",
        options: [
          { id: "1", answer: "public/index.html" },
          { id: "2", answer: "src/App.js" },
          { id: "3", answer: "src/index.js" },
          { id: "4", answer: "package.json" },
        ],
        correctAnswer: [{ id: "3", answer: "src/index.js" }],
      },
      {
        id: "24",
        question: "How do you pass a function as a prop to a child component?",
        description:
          "Functions are just values in JavaScript, so you can pass them as props to child components just like any other data type (strings, numbers, objects). The child component can then call this prop as if it were a local function.",
        options: [
          { id: "1", answer: "You cannot pass functions as props." },
          { id: "2", answer: "By wrapping it in a string." },
          {
            id: "3",
            answer:
              "By simply assigning the function to a prop name, e.g., `<ChildComponent onClick={myFunction} />`.",
          },
          { id: "4", answer: "Using a special `function` attribute." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "By simply assigning the function to a prop name, e.g., `<ChildComponent onClick={myFunction} />`.",
          },
        ],
      },
      {
        id: "25",
        question: "What is the purpose of `StrictMode` in React?",
        description:
          "StrictMode is a tool for highlighting potential problems in an application. It does not render any visible UI. It activates additional checks and warnings for its descendants. These checks are run in development mode only.",
        options: [
          { id: "1", answer: "To force the application to run faster." },
          { id: "2", answer: "To enable production mode optimizations." },
          {
            id: "3",
            answer:
              "To highlight potential problems in an application during development.",
          },
          { id: "4", answer: "To enforce type checking in JSX." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To highlight potential problems in an application during development.",
          },
        ],
      },
      {
        id: "26",
        question: "Can you use JavaScript comments inside JSX?",
        description:
          "Yes, you can use JavaScript comments inside JSX, but they must be wrapped in curly braces and use the multi-line comment syntax: `{/* comment here */}`.",
        options: [
          { id: "1", answer: "No, comments are not allowed in JSX." },
          { id: "2", answer: "Yes, using ``." },
          { id: "3", answer: "Yes, using `// comment`." },
          {
            id: "4",
            answer: "Yes, but only within curly braces `{/* comment */}`.",
          },
        ],
        correctAnswer: [
          {
            id: "4",
            answer: "Yes, but only within curly braces `{/* comment */}`.",
          },
        ],
      },
      {
        id: "27",
        question: "What is 'prop drilling'?",
        description:
          "Prop drilling (or 'threading props') refers to the process of passing data from a parent component down through multiple layers of intermediate components that don't actually need the data themselves, until it reaches the component that needs it. This can lead to less maintainable code.",
        options: [
          { id: "1", answer: "A method to optimize prop performance." },
          {
            id: "2",
            answer: "Passing props down through many nested components.",
          },
          {
            id: "3",
            answer: "Updating props directly from a child component.",
          },
          { id: "4", answer: "Validating props with PropTypes." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "Passing props down through many nested components.",
          },
        ],
      },
      {
        id: "28",
        question: "Which React Hook is used to access the DOM directly?",
        description:
          "The `useRef` hook returns a mutable ref object whose `.current` property is initialized to the passed argument. The returned ref object will persist for the full lifetime of the component. It's commonly used to access underlying DOM elements or React components.",
        options: [
          { id: "1", answer: "useState" },
          { id: "2", answer: "useEffect" },
          { id: "3", answer: "useContext" },
          { id: "4", answer: "useRef" },
        ],
        correctAnswer: [{ id: "4", answer: "useRef" }],
      },
      {
        id: "29",
        question: "What is the purpose of `React.memo()`?",
        description:
          "`React.memo()` is a higher-order component that lets you memoize a functional component, meaning React will skip rendering the component if its props have not changed. This can lead to performance optimization for components that render frequently with the same props.",
        options: [
          { id: "1", answer: "To define new state variables." },
          {
            id: "2",
            answer:
              "To optimize functional component re-renders by memoizing props.",
          },
          { id: "3", answer: "To define context providers." },
          { id: "4", answer: "To create a global store for data." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "To optimize functional component re-renders by memoizing props.",
          },
        ],
      },
      {
        id: "30",
        question:
          "What is the purpose of the `key` prop when rendering lists of components?",
        description:
          "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings to help React efficiently reorder elements and maintain their state across renders.",
        options: [
          { id: "1", answer: "To style the list items." },
          { id: "2", answer: "To pass data to the child components." },
          {
            id: "3",
            answer:
              "To help React identify unique list items during reconciliation.",
          },
          { id: "4", answer: "To sort the list automatically." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To help React identify unique list items during reconciliation.",
          },
        ],
      },
      {
        id: "31",
        question:
          "Which of the following is NOT a valid way to create a component in React?",
        description:
          "Arrow function components (`const MyComponent = () => {}`), regular function components (`function MyComponent() {}`), and ES6 class components (`class MyComponent extends React.Component {}`) are valid ways to create components. HTML-like tags directly are not a way to *create* a component, but rather to *use* one.",
        options: [
          { id: "1", answer: "Functional component (arrow function)" },
          { id: "2", answer: "Class component" },
          { id: "3", answer: "HTML tag like `<my-component>`" },
          { id: "4", answer: "Functional component (regular function)" },
        ],
        correctAnswer: [{ id: "3", answer: "HTML tag like `<my-component>`" }],
      },
      {
        id: "32",
        question: "How do you apply inline styles in React JSX?",
        description:
          "Inline styles in React are applied using a JavaScript object where keys are camelCased CSS properties and values are string or number values. For example, `style={{color: 'red', fontSize: '16px'}}`.",
        options: [
          { id: "1", answer: "`style='color: red;'`" },
          { id: "2", answer: "`style={{color: 'red'}}`" },
          { id: "3", answer: "`css='color: red;'`" },
          { id: "4", answer: "You cannot use inline styles in React." },
        ],
        correctAnswer: [{ id: "2", answer: "`style={{color: 'red'}}`" }],
      },
      {
        id: "33",
        question: "What is `setState()` used for in class components?",
        description:
          "`setState()` is the primary method for updating component state in class components. It queues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.",
        options: [
          { id: "1", answer: "To directly modify `this.state`." },
          { id: "2", answer: "To retrieve the current state." },
          {
            id: "3",
            answer: "To update the component's state and trigger a re-render.",
          },
          { id: "4", answer: "To define the initial state." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To update the component's state and trigger a re-render.",
          },
        ],
      },
      {
        id: "34",
        question: "Which of the following is true about props?",
        description:
          "Props are read-only and cannot be modified by the child component. They are meant to be a way to pass data down the component tree in a unidirectional flow.",
        options: [
          { id: "1", answer: "Props can be modified by the child component." },
          { id: "2", answer: "Props are mutable." },
          { id: "3", answer: "Props are read-only." },
          { id: "4", answer: "Props are only used for styling." },
        ],
        correctAnswer: [{ id: "3", answer: "Props are read-only." }],
      },
      {
        id: "35",
        question:
          "When should you use a class component instead of a functional component (in modern React)?",
        description:
          "With the introduction of Hooks, functional components can now manage state and lifecycle effects, largely eliminating the need for class components in new development. Class components might still be used for error boundaries or for maintaining older codebases.",
        options: [
          { id: "1", answer: "When the component needs to render quickly." },
          { id: "2", answer: "Class components are always preferred." },
          {
            id: "3",
            answer:
              "Primarily for older codebases or specific features like Error Boundaries, as Hooks cover most use cases for functional components.",
          },
          { id: "4", answer: "When the component has no props." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Primarily for older codebases or specific features like Error Boundaries, as Hooks cover most use cases for functional components.",
          },
        ],
      },
      {
        id: "36",
        question: "What is 'Context API' in React used for?",
        description:
          "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level (solving prop drilling). It's suitable for 'global' data like themes, user authentication status, or preferred language.",
        options: [
          { id: "1", answer: "For managing component lifecycle methods." },
          {
            id: "2",
            answer: "For handling side effects in functional components.",
          },
          {
            id: "3",
            answer: "For managing global state and avoiding prop drilling.",
          },
          { id: "4", answer: "For defining routing in an application." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "For managing global state and avoiding prop drilling.",
          },
        ],
      },
      {
        id: "37",
        question: "What is the purpose of `useEffect`'s dependency array?",
        description:
          "The dependency array in `useEffect` specifies a list of values that the effect depends on. If any value in the array changes between renders, the effect will re-run. An empty array `[]` means the effect runs only once after the initial render (like `componentDidMount`). Omitting it means it runs after every render.",
        options: [
          { id: "1", answer: "To define the initial state of the component." },
          {
            id: "2",
            answer:
              "To specify when the effect should re-run based on changed values.",
          },
          { id: "3", answer: "To declare global variables." },
          {
            id: "4",
            answer: "To limit the number of times the effect can run.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "To specify when the effect should re-run based on changed values.",
          },
        ],
      },
      {
        id: "38",
        question: "What is `React Router` used for?",
        description:
          "React Router is a popular library for handling declarative routing in React applications. It enables single-page applications with multiple views and allows for navigation without full page reloads.",
        options: [
          { id: "1", answer: "For managing component state." },
          { id: "2", answer: "For styling React components." },
          {
            id: "3",
            answer:
              "For handling navigation and routing in a React application.",
          },
          { id: "4", answer: "For fetching data from an API." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "For handling navigation and routing in a React application.",
          },
        ],
      },
      {
        id: "39",
        question: "What are 'Higher-Order Components' (HOCs) in React?",
        description:
          "A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. HOCs are functions that take a component as an argument and return a new component with enhanced functionality. They are a pattern derived from React's compositional nature.",
        options: [
          { id: "1", answer: "Components with more than one child." },
          { id: "2", answer: "Components that contain complex logic." },
          {
            id: "3",
            answer:
              "Functions that take a component and return a new, enhanced component.",
          },
          { id: "4", answer: "Components that render only once." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Functions that take a component and return a new, enhanced component.",
          },
        ],
      },
      {
        id: "40",
        question:
          "What is the correct way to include a stylesheet in a React component?",
        description:
          "In React applications built with bundlers like Webpack (used by Create React App), you typically import CSS files directly into your JavaScript components. The bundler handles compiling and injecting the styles.",
        options: [
          {
            id: "1",
            answer:
              "Using `<link rel='stylesheet' href='style.css'>` directly in JSX.",
          },
          {
            id: "2",
            answer:
              "By importing the CSS file into the JavaScript component: `import './style.css';`.",
          },
          { id: "3", answer: "Using `document.write('<style>...</style>');`." },
          { id: "4", answer: "Styles are always written inline." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "By importing the CSS file into the JavaScript component: `import './style.css';`.",
          },
        ],
      },
      {
        id: "41",
        question: "What is 'composition' in React?",
        description:
          "Composition is a core concept in React where complex UIs are built by combining smaller, independent, and reusable components. This is preferred over inheritance for component reuse.",
        options: [
          { id: "1", answer: "Inheriting properties from parent components." },
          {
            id: "2",
            answer: "Combining multiple components to build complex UIs.",
          },
          { id: "3", answer: "Optimizing rendering performance." },
          { id: "4", answer: "Using external libraries in React." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "Combining multiple components to build complex UIs.",
          },
        ],
      },
      {
        id: "42",
        question: "What is the purpose of `defaultProps` in React?",
        description:
          "`defaultProps` is a way to set default values for props. If a prop is not explicitly passed to a component, it will receive the value defined in `defaultProps`.",
        options: [
          { id: "1", answer: "To set mandatory props for a component." },
          { id: "2", answer: "To define the initial state of a component." },
          {
            id: "3",
            answer:
              "To provide default values for props if they are not explicitly passed.",
          },
          { id: "4", answer: "To prevent props from changing." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To provide default values for props if they are not explicitly passed.",
          },
        ],
      },
      {
        id: "43",
        question:
          "Can you define `state` in a functional component without using Hooks?",
        description:
          "Before the introduction of Hooks in React 16.8, functional components were 'stateless' and could not manage their own state. State management was exclusive to class components. Hooks (like `useState`) were introduced to bring state and lifecycle features to functional components.",
        options: [
          { id: "1", answer: "Yes, using a global variable." },
          {
            id: "2",
            answer: "No, functional components were stateless before Hooks.",
          },
          { id: "3", answer: "Yes, by passing it as a prop." },
          { id: "4", answer: "Only in strict mode." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "No, functional components were stateless before Hooks.",
          },
        ],
      },
      {
        id: "44",
        question:
          "What is a 'Pure Component' in React (specifically for class components)?",
        description:
          "`React.PureComponent` is a base class component that implements `shouldComponentUpdate()` with a shallow prop and state comparison. This means it will re-render only if shallowly compared props or state have changed, potentially optimizing performance.",
        options: [
          { id: "1", answer: "A component that has no state." },
          {
            id: "2",
            answer:
              "A component that always renders without checking props/state.",
          },
          {
            id: "3",
            answer:
              "A class component that performs a shallow comparison of props and state to prevent unnecessary re-renders.",
          },
          {
            id: "4",
            answer: "A functional component that uses `React.memo()`.",
          },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A class component that performs a shallow comparison of props and state to prevent unnecessary re-renders.",
          },
        ],
      },
      {
        id: "45",
        question: "What is the purpose of `useCallback` hook?",
        description:
          "The `useCallback` hook returns a memoized callback function. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
        options: [
          { id: "1", answer: "To create a callback that runs only once." },
          { id: "2", answer: "To define an asynchronous function." },
          {
            id: "3",
            answer:
              "To memoize a callback function, preventing unnecessary re-creation on re-renders.",
          },
          { id: "4", answer: "To get the previous value of a state." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To memoize a callback function, preventing unnecessary re-creation on re-renders.",
          },
        ],
      },
      {
        id: "46",
        question: "What is the purpose of `useMemo` hook?",
        description:
          "The `useMemo` hook returns a memoized value. It only recomputes the memoized value when one of the dependencies has changed, preventing expensive calculations on every render.",
        options: [
          { id: "1", answer: "To manage global state." },
          { id: "2", answer: "To store references to DOM elements." },
          {
            id: "3",
            answer:
              "To memoize a computed value, recalculating only when dependencies change.",
          },
          { id: "4", answer: "To handle side effects." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To memoize a computed value, recalculating only when dependencies change.",
          },
        ],
      },
      {
        id: "47",
        question: "What is `render props` pattern?",
        description:
          "The render props pattern is a technique for sharing code between React components using a prop whose value is a function. The component uses this function to render its children with specific data or logic, allowing for flexible and reusable component behavior.",
        options: [
          { id: "1", answer: "A method to conditionally render components." },
          {
            id: "2",
            answer:
              "A pattern where a component passes a function as a prop to its child to render something.",
          },
          { id: "3", answer: "A way to force a component to re-render." },
          { id: "4", answer: "A technique for styling components using CSS." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A pattern where a component passes a function as a prop to its child to render something.",
          },
        ],
      },
      {
        id: "48",
        question: "What are `Fragments` used for in React?",
        description:
          "Fragments let you group a list of children without adding extra nodes to the DOM. This is useful for returning multiple elements from a component's `render` method or functional component's return, without introducing unnecessary wrapping `div` elements.",
        options: [
          { id: "1", answer: "To create isolated CSS scopes." },
          { id: "2", answer: "To add multiple root elements to the DOM." },
          {
            id: "3",
            answer:
              "To group multiple elements without adding an extra DOM node.",
          },
          { id: "4", answer: "To define reusable logic across components." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To group multiple elements without adding an extra DOM node.",
          },
        ],
      },
      {
        id: "49",
        question: "Which of the following describes a 'functional component'?",
        description:
          "A functional component is a plain JavaScript function that accepts props as an argument and returns a React element (JSX). With the introduction of Hooks, they can now manage state and side effects, making them the preferred way to write components.",
        options: [
          { id: "1", answer: "A class that extends `React.Component`." },
          { id: "2", answer: "A component that always has a constructor." },
          { id: "3", answer: "A JavaScript function that returns JSX." },
          { id: "4", answer: "A component that cannot receive props." },
        ],
        correctAnswer: [
          { id: "3", answer: "A JavaScript function that returns JSX." },
        ],
      },
      {
        id: "50",
        question: "What is `children` prop in React?",
        description:
          "The `children` prop is a special prop that allows you to pass components or elements as data to other components by nesting them within the opening and closing tags of a component. It gives the parent component the ability to render whatever is passed inside its tags.",
        options: [
          { id: "1", answer: "A prop to define the initial state." },
          {
            id: "2",
            answer: "A prop that stores a list of sibling components.",
          },
          {
            id: "3",
            answer:
              "A special prop that allows components to receive and render elements nested within their tags.",
          },
          { id: "4", answer: "A prop used only for text content." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A special prop that allows components to receive and render elements nested within their tags.",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Node.js (Basics)",
    description:
      "An open-source, cross-platform JavaScript runtime environment for executing JavaScript code outside a web browser, commonly used for building scalable network applications.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What is Node.js?",
        description:
          "Node.js is an open-source, cross-platform JavaScript runtime environment. It allows developers to run JavaScript code on the server-side, outside of a web browser.",
        options: [
          {
            id: "1",
            answer: "A JavaScript framework for front-end development.",
          },
          { id: "2", answer: "A new programming language." },
          {
            id: "3",
            answer:
              "A JavaScript runtime environment for server-side and network applications.",
          },
          { id: "4", answer: "A database system." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A JavaScript runtime environment for server-side and network applications.",
          },
        ],
      },
      {
        id: "2",
        question: "Which JavaScript engine does Node.js use?",
        description:
          "Node.js is built on Chrome's V8 JavaScript engine. V8 compiles JavaScript directly into native machine code, making Node.js very fast.",
        options: [
          { id: "1", answer: "SpiderMonkey" },
          { id: "2", answer: "Chakra" },
          { id: "3", answer: "V8" },
          { id: "4", answer: "JavaScriptCore" },
        ],
        correctAnswer: [{ id: "3", answer: "V8" }],
      },
      {
        id: "3",
        question: "What does NPM stand for in the context of Node.js?",
        description:
          "NPM stands for Node Package Manager. It is the default package manager for Node.js and is used to install, share, and manage packages (libraries and modules).",
        options: [
          { id: "1", answer: "Node Programming Module" },
          { id: "2", answer: "New Project Manager" },
          { id: "3", answer: "Node Package Manager" },
          { id: "4", answer: "Network Process Manager" },
        ],
        correctAnswer: [{ id: "3", answer: "Node Package Manager" }],
      },
      {
        id: "4",
        question: "Node.js is known for its ______ I/O model.",
        description:
          "Node.js uses a non-blocking, event-driven I/O model. This allows it to handle many concurrent connections efficiently without blocking the main thread.",
        options: [
          { id: "1", answer: "Blocking" },
          { id: "2", answer: "Synchronous" },
          { id: "3", answer: "Multi-threaded" },
          { id: "4", answer: "Non-blocking" },
        ],
        correctAnswer: [{ id: "4", answer: "Non-blocking" }],
      },
      {
        id: "5",
        question:
          "Which module is built-in to Node.js for creating HTTP servers?",
        description:
          "The `http` module is a core Node.js module that provides functionality for creating HTTP servers and clients. It's fundamental for building web applications with Node.js.",
        options: [
          { id: "1", answer: "https" },
          { id: "2", answer: "server" },
          { id: "3", answer: "network" },
          { id: "4", answer: "http" },
        ],
        correctAnswer: [{ id: "4", answer: "http" }],
      },
      {
        id: "6",
        question: "How do you include external modules in a Node.js file?",
        description:
          "The `require()` function (part of CommonJS module system) is used to import modules in Node.js. For example, `const fs = require('fs');` imports the file system module.",
        options: [
          { id: "1", answer: "import 'module_name';" },
          { id: "2", answer: "include 'module_name';" },
          { id: "3", answer: "use 'module_name';" },
          { id: "4", answer: "require('module_name');" },
        ],
        correctAnswer: [{ id: "4", answer: "require('module_name');" }],
      },
      {
        id: "7",
        question:
          "Which global object in Node.js provides information about the current Node.js process?",
        description:
          "The `process` global object provides information about, and control over, the current Node.js process. It includes details like arguments, environment variables, standard I/O streams, and more.",
        options: [
          { id: "1", answer: "global" },
          { id: "2", answer: "console" },
          { id: "3", answer: "process" },
          { id: "4", answer: "Buffer" },
        ],
        correctAnswer: [{ id: "3", answer: "process" }],
      },
      {
        id: "8",
        question:
          "What is the purpose of the `package.json` file in a Node.js project?",
        description:
          "The `package.json` file is a manifest file for a Node.js project. It contains metadata about the project (name, version, description), lists dependencies, scripts, and more.",
        options: [
          { id: "1", answer: "To store environmental variables." },
          { id: "2", answer: "To define database schema." },
          {
            id: "3",
            answer: "To list project metadata, dependencies, and scripts.",
          },
          { id: "4", answer: "To store user authentication details." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To list project metadata, dependencies, and scripts.",
          },
        ],
      },
      {
        id: "9",
        question:
          "Which command is used to install a package globally using NPM?",
        description:
          "The `-g` or `--global` flag with `npm install` installs a package globally, making its executable commands available from any directory in your system's PATH.",
        options: [
          { id: "1", answer: "npm install package_name --local" },
          { id: "2", answer: "npm add package_name -g" },
          { id: "3", answer: "npm install package_name -g" },
          { id: "4", answer: "npm global install package_name" },
        ],
        correctAnswer: [{ id: "3", answer: "npm install package_name -g" }],
      },
      {
        id: "10",
        question:
          "Which command is used to run a script defined in `package.json`?",
        description:
          "The `npm run` command is used to execute custom scripts defined in the `scripts` section of `package.json`. For example, if you have a script named `start`, you run it with `npm run start` (or just `npm start` for common scripts).",
        options: [
          { id: "1", answer: "npm execute script_name" },
          { id: "2", answer: "npm start script_name" },
          { id: "3", answer: "npm run script_name" },
          { id: "4", answer: "node script_name" },
        ],
        correctAnswer: [{ id: "3", answer: "npm run script_name" }],
      },
      {
        id: "11",
        question: "What is a 'callback function' in Node.js?",
        description:
          "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. Node.js heavily relies on callbacks for its asynchronous operations.",
        options: [
          {
            id: "1",
            answer: "A function that is called before the main function.",
          },
          { id: "2", answer: "A function that executes synchronously." },
          {
            id: "3",
            answer:
              "A function passed as an argument to be executed later, typically for asynchronous operations.",
          },
          { id: "4", answer: "A function used for debugging purposes only." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A function passed as an argument to be executed later, typically for asynchronous operations.",
          },
        ],
      },
      {
        id: "12",
        question: "What is the purpose of the `fs` module in Node.js?",
        description:
          "The `fs` (File System) module provides an API for interacting with the file system. It offers methods for reading files, writing files, creating directories, and more, both synchronously and asynchronously.",
        options: [
          { id: "1", answer: "To perform mathematical operations." },
          { id: "2", answer: "To handle network requests." },
          {
            id: "3",
            answer:
              "To interact with the file system (read/write files, etc.).",
          },
          { id: "4", answer: "To manage database connections." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To interact with the file system (read/write files, etc.).",
          },
        ],
      },
      {
        id: "13",
        question: "What does it mean for Node.js to be 'single-threaded'?",
        description:
          "Node.js's JavaScript execution is single-threaded, meaning it processes operations sequentially on one main thread. However, it leverages the event loop and asynchronous I/O operations (offloaded to C++ worker threads) to handle concurrency without blocking.",
        options: [
          { id: "1", answer: "It can only handle one user at a time." },
          { id: "2", answer: "It runs on a single CPU core only." },
          {
            id: "3",
            answer:
              "It executes JavaScript code on a single thread, but handles I/O asynchronously.",
          },
          { id: "4", answer: "It doesn't support parallel processing at all." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "It executes JavaScript code on a single thread, but handles I/O asynchronously.",
          },
        ],
      },
      {
        id: "14",
        question: "Which command is used to start a Node.js application?",
        description:
          "The `node` command followed by the filename of your JavaScript entry point is used to execute a Node.js script. For example, `node app.js`.",
        options: [
          { id: "1", answer: "run app.js" },
          { id: "2", answer: "execute app.js" },
          { id: "3", answer: "start app.js" },
          { id: "4", answer: "node app.js" },
        ],
        correctAnswer: [{ id: "4", answer: "node app.js" }],
      },
      {
        id: "15",
        question: "What is the 'Event Loop' in Node.js?",
        description:
          "The Event Loop is a core component of Node.js's non-blocking I/O model. It continuously checks the call stack for tasks to execute and the callback queue for functions to resolve, allowing Node.js to handle asynchronous operations efficiently.",
        options: [
          { id: "1", answer: "A loop that processes only synchronous code." },
          { id: "2", answer: "A mechanism for multi-threading in Node.js." },
          {
            id: "3",
            answer:
              "A mechanism that handles asynchronous callbacks and I/O operations.",
          },
          { id: "4", answer: "A tool for debugging Node.js applications." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A mechanism that handles asynchronous callbacks and I/O operations.",
          },
        ],
      },
      {
        id: "16",
        question: "Which popular web framework is commonly used with Node.js?",
        description:
          "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's one of the most popular choices for building APIs and web servers with Node.js.",
        options: [
          { id: "1", answer: "Angular" },
          { id: "2", answer: "React" },
          { id: "3", answer: "Express.js" },
          { id: "4", answer: "Vue.js" },
        ],
        correctAnswer: [{ id: "3", answer: "Express.js" }],
      },
      {
        id: "17",
        question: "What is `module.exports` used for?",
        description:
          "`module.exports` is used in Node.js (CommonJS module system) to export values (functions, objects, or primitives) from a module, making them available for other modules to `require()`.",
        options: [
          { id: "1", answer: "To define global variables." },
          { id: "2", answer: "To import modules from other files." },
          {
            id: "3",
            answer:
              "To make functions/objects available for export from a module.",
          },
          { id: "4", answer: "To define local variables within a function." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To make functions/objects available for export from a module.",
          },
        ],
      },
      {
        id: "18",
        question:
          "What is the primary benefit of Node.js's non-blocking I/O model?",
        description:
          "The non-blocking I/O model allows Node.js to handle a large number of concurrent connections with a single thread, as it doesn't wait for I/O operations to complete, instead moving on to other tasks and processing the result via callbacks when available. This makes it highly scalable for I/O-bound applications.",
        options: [
          { id: "1", answer: "Simpler code debugging." },
          { id: "2", answer: "Reduced memory consumption." },
          {
            id: "3",
            answer:
              "Better performance and scalability for I/O-bound operations.",
          },
          { id: "4", answer: "Stronger type checking." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Better performance and scalability for I/O-bound operations.",
          },
        ],
      },
      {
        id: "19",
        question:
          "Which object in Node.js contains command-line arguments passed to the script?",
        description:
          "The `process.argv` property is an array that contains the command-line arguments passed when the Node.js process was launched. The first element is `node`, and the second is the script's filename.",
        options: [
          { id: "1", answer: "process.env" },
          { id: "2", answer: "global.args" },
          { id: "3", answer: "process.args" },
          { id: "4", answer: "process.argv" },
        ],
        correctAnswer: [{ id: "4", answer: "process.argv" }],
      },
      {
        id: "20",
        question:
          "What is the purpose of `res.end()` in an HTTP response in Node.js?",
        description:
          "`res.end()` is used to signal to the server that all of the response headers and body have been sent, and that this response is complete. It closes the connection if it's not kept alive.",
        options: [
          { id: "1", answer: "To send a response header." },
          { id: "2", answer: "To write data to the response body." },
          {
            id: "3",
            answer: "To end the response process and signal completion.",
          },
          { id: "4", answer: "To redirect the client to another URL." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To end the response process and signal completion.",
          },
        ],
      },
      {
        id: "21",
        question: "What is a 'middleware' in Express.js?",
        description:
          "Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. They can execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware.",
        options: [
          { id: "1", answer: "A function that handles database queries." },
          {
            id: "2",
            answer:
              "A function that processes requests between the client and the server.",
          },
          { id: "3", answer: "A tool for debugging Express applications." },
          { id: "4", answer: "A template engine for rendering views." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A function that processes requests between the client and the server.",
          },
        ],
      },
      {
        id: "22",
        question: "Which NPM command is used to uninstall a package?",
        description:
          "The `npm uninstall` command is used to remove a package from `node_modules` and also update `package.json` and `package-lock.json`.",
        options: [
          { id: "1", answer: "npm remove package_name" },
          { id: "2", answer: "npm delete package_name" },
          { id: "3", answer: "npm rm package_name" },
          { id: "4", answer: "npm uninstall package_name" },
        ],
        correctAnswer: [{ id: "4", answer: "npm uninstall package_name" }],
      },
      {
        id: "23",
        question:
          "What is the default port for an HTTP server created with Node.js?",
        description:
          "While you can specify any port, 3000 and 8080 are common for development. The standard HTTP port is 80, but that usually requires special permissions. Node.js applications don't have a *default* default port unless explicitly coded or configured, but 3000 and 8080 are frequently used examples.",
        options: [
          { id: "1", answer: "80" },
          { id: "2", answer: "443" },
          { id: "3", answer: "3000 (common in examples)" },
          { id: "4", answer: "27017" },
        ],
        correctAnswer: [{ id: "3", answer: "3000 (common in examples)" }],
      },
      {
        id: "24",
        question: "Which of the following is NOT a core module in Node.js?",
        description:
          "`fs` (File System), `http` (HTTP), and `path` (Path utilities) are all core modules built into Node.js. `express` is a third-party framework that needs to be installed via NPM.",
        options: [
          { id: "1", answer: "fs" },
          { id: "2", answer: "http" },
          { id: "3", answer: "express" },
          { id: "4", answer: "path" },
        ],
        correctAnswer: [{ id: "3", answer: "express" }],
      },
      {
        id: "25",
        question: "What is the purpose of `console.log()` in Node.js?",
        description:
          "`console.log()` is used to print messages to the standard output (usually the terminal or console where the Node.js process is running). It's a fundamental debugging and informational tool.",
        options: [
          { id: "1", answer: "To send data to a web browser." },
          {
            id: "2",
            answer: "To log messages to the console for debugging/information.",
          },
          { id: "3", answer: "To write data to a file." },
          { id: "4", answer: "To define environment variables." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "To log messages to the console for debugging/information.",
          },
        ],
      },
      {
        id: "26",
        question:
          "Which asynchronous pattern is used to handle multiple asynchronous operations in a more readable way than nested callbacks?",
        description:
          "Promises and `async/await` (which builds on Promises) are modern patterns to handle asynchronous operations more cleanly and avoid 'callback hell', making the code look more synchronous.",
        options: [
          { id: "1", answer: "Synchronous functions" },
          { id: "2", answer: "If/else statements" },
          { id: "3", answer: "Promises" },
          { id: "4", answer: "Loops" },
        ],
        correctAnswer: [{ id: "3", answer: "Promises" }],
      },
      {
        id: "27",
        question: "What is the purpose of `res.json()` in Express.js?",
        description:
          "`res.json()` is an Express.js method used to send a JSON response to the client. It automatically sets the `Content-Type` header to `application/json`.",
        options: [
          { id: "1", answer: "To send an HTML response." },
          { id: "2", answer: "To send a plain text response." },
          { id: "3", answer: "To send a JSON response." },
          { id: "4", answer: "To redirect the user." },
        ],
        correctAnswer: [{ id: "3", answer: "To send a JSON response." }],
      },
      {
        id: "28",
        question: "What is the `nodemon` tool used for?",
        description:
          "`nodemon` is a utility that monitors for any changes in your Node.js application's source and automatically restarts your server. This greatly speeds up development workflow by eliminating the need for manual restarts.",
        options: [
          { id: "1", answer: "To deploy Node.js applications." },
          { id: "2", answer: "To debug Node.js code." },
          {
            id: "3",
            answer:
              "To automatically restart the Node.js server on file changes.",
          },
          { id: "4", answer: "To manage database connections." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To automatically restart the Node.js server on file changes.",
          },
        ],
      },
      {
        id: "29",
        question:
          "Which module provides utilities for working with file and directory paths?",
        description:
          "The `path` module provides utilities for working with file and directory paths. It includes methods for joining paths, resolving absolute paths, extracting file names, etc.",
        options: [
          { id: "1", answer: "fs" },
          { id: "2", answer: "url" },
          { id: "3", answer: "os" },
          { id: "4", answer: "path" },
        ],
        correctAnswer: [{ id: "4", answer: "path" }],
      },
      {
        id: "30",
        question:
          "How do you handle errors in asynchronous Node.js operations (e.g., callbacks)?",
        description:
          "A common pattern for handling errors in asynchronous operations using callbacks is to pass an error as the first argument to the callback function. If `err` is null, the operation succeeded; otherwise, it contains the error.",
        options: [
          {
            id: "1",
            answer: "Using `try...catch` blocks directly around async calls.",
          },
          {
            id: "2",
            answer: "By logging errors to a file and continuing execution.",
          },
          {
            id: "3",
            answer:
              "Passing an `error` object as the first argument to the callback.",
          },
          { id: "4", answer: "Node.js handles all errors automatically." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Passing an `error` object as the first argument to the callback.",
          },
        ],
      },
      {
        id: "31",
        question: "What is the purpose of the `dotenv` package?",
        description:
          "The `dotenv` package loads environment variables from a `.env` file into `process.env`. This is a common practice for managing configuration that varies between environments (development, production).",
        options: [
          { id: "1", answer: "To manage database migrations." },
          { id: "2", answer: "To connect to external APIs." },
          {
            id: "3",
            answer: "To load environment variables from a .env file.",
          },
          { id: "4", answer: "To compress static assets." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To load environment variables from a .env file.",
          },
        ],
      },
      {
        id: "32",
        question: "Which command initializes a new `package.json` file?",
        description:
          "The `npm init` command is used to create a `package.json` file, guiding you through a series of prompts to gather information about your project.",
        options: [
          { id: "1", answer: "npm new" },
          { id: "2", answer: "npm start" },
          { id: "3", answer: "npm build" },
          { id: "4", answer: "npm init" },
        ],
        correctAnswer: [{ id: "4", answer: "npm init" }],
      },
      {
        id: "33",
        question: "What is the `buffer` module in Node.js used for?",
        description:
          "The `buffer` module provides a way to handle binary data directly. `Buffer` objects represent a fixed-size raw binary data sequence. They are used when dealing with streams of data, file I/O, or network protocols.",
        options: [
          { id: "1", answer: "To temporarily store data in a browser." },
          { id: "2", answer: "To manage large data sets in memory." },
          { id: "3", answer: "To handle raw binary data." },
          { id: "4", answer: "To speed up JavaScript execution." },
        ],
        correctAnswer: [{ id: "3", answer: "To handle raw binary data." }],
      },
      {
        id: "34",
        question: "What is the `eventEmitter` class primarily used for?",
        description:
          "The `EventEmitter` class (from the `events` module) is fundamental for event-driven programming in Node.js. It allows you to create objects that emit named events, and then register listeners that execute when those events are emitted.",
        options: [
          { id: "1", answer: "To create new threads." },
          { id: "2", answer: "To handle HTTP requests." },
          { id: "3", answer: "To implement custom events and event handling." },
          { id: "4", answer: "To manage environment variables." },
        ],
        correctAnswer: [
          { id: "3", answer: "To implement custom events and event handling." },
        ],
      },
      {
        id: "35",
        question: "Which method is used to create an HTTP server instance?",
        description:
          "The `http.createServer()` method is used to create a new HTTP server object. It takes a `requestListener` function as an argument, which is executed every time the server receives a request.",
        options: [
          { id: "1", answer: "http.startServer()" },
          { id: "2", answer: "http.listen()" },
          { id: "3", answer: "http.newServer()" },
          { id: "4", answer: "http.createServer()" },
        ],
        correctAnswer: [{ id: "4", answer: "http.createServer()" }],
      },
      {
        id: "36",
        question: "How do you define a route in Express.js for a GET request?",
        description:
          "In Express.js, you define routes using methods like `app.get()`, `app.post()`, `app.put()`, `app.delete()`, etc. `app.get('/api/users', ...)` defines a handler for GET requests to the `/api/users` path.",
        options: [
          { id: "1", answer: "route.get('/path', ...)" },
          { id: "2", answer: "http.get('/path', ...)" },
          { id: "3", answer: "app.route('/path').get(...)" },
          { id: "4", answer: "app.get('/path', ...)" },
        ],
        correctAnswer: [{ id: "4", answer: "app.get('/path', ...)" }],
      },
      {
        id: "37",
        question: "What is the `req.body` property in Express.js used for?",
        description:
          "The `req.body` property contains key-value pairs of data submitted in the request body. It's populated by middleware like `express.json()` or `express.urlencoded()`, which parse incoming request bodies.",
        options: [
          { id: "1", answer: "To access URL parameters." },
          { id: "2", answer: "To access query parameters." },
          {
            id: "3",
            answer:
              "To access data sent in the request body (e.g., from a POST request).",
          },
          { id: "4", answer: "To access HTTP headers." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To access data sent in the request body (e.g., from a POST request).",
          },
        ],
      },
      {
        id: "38",
        question: "What is the difference between `npm install` and `npm ci`?",
        description:
          "`npm install` installs dependencies and creates/updates `package-lock.json`. `npm ci` (clean install) is used in automated environments, installs dependencies *only* from `package-lock.json` (or `npm-shrinkwrap.json`), and fails if `package.json` and the lockfile are out of sync. It's faster and more reliable for CI/CD.",
        options: [
          {
            id: "1",
            answer: "`npm install` is faster, `npm ci` installs globally.",
          },
          {
            id: "2",
            answer:
              "`npm ci` is for development, `npm install` for production.",
          },
          {
            id: "3",
            answer:
              "`npm ci` installs from `package-lock.json` and is faster for CI/CD; `npm install` might update the lockfile.",
          },
          { id: "4", answer: "There is no functional difference." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "`npm ci` installs from `package-lock.json` and is faster for CI/CD; `npm install` might update the lockfile.",
          },
        ],
      },
      {
        id: "39",
        question:
          "Which utility module provides a way to debug Node.js applications?",
        description:
          "Node.js has a built-in debugger accessible via the `node inspect` command or by passing the `--inspect` flag. The `util` module provides various utility functions, but not directly for debugging itself, though `util.debuglog` is debugging-related.",
        options: [
          { id: "1", answer: "debugger" },
          { id: "2", answer: "console" },
          { id: "3", answer: "debug" },
          { id: "4", answer: "inspect (via node inspect)" },
        ],
        correctAnswer: [{ id: "4", answer: "inspect (via node inspect)" }],
      },
      {
        id: "40",
        question: "What is 'callback hell'?",
        description:
          "Callback hell (also known as 'pyramid of doom') is a common issue in JavaScript asynchronous programming where multiple nested callback functions make the code difficult to read, understand, and maintain. Promises and `async/await` were introduced to mitigate this.",
        options: [
          {
            id: "1",
            answer: "An error that occurs during synchronous operations.",
          },
          {
            id: "2",
            answer:
              "A situation where too many synchronous functions are called.",
          },
          { id: "3", answer: "Nested, unreadable asynchronous callbacks." },
          { id: "4", answer: "A bug related to event loop blocking." },
        ],
        correctAnswer: [
          { id: "3", answer: "Nested, unreadable asynchronous callbacks." },
        ],
      },
      {
        id: "41",
        question:
          "Which module allows you to define and retrieve environment variables?",
        description:
          "The `process.env` object (part of the global `process` object) is used to access environment variables. While `dotenv` helps *load* them from a file, `process.env` is the direct interface.",
        options: [
          { id: "1", answer: "config" },
          { id: "2", answer: "env" },
          { id: "3", answer: "process.env" },
          { id: "4", answer: "util" },
        ],
        correctAnswer: [{ id: "3", answer: "process.env" }],
      },
      {
        id: "42",
        question: "What is the purpose of `app.listen()` in Express.js?",
        description:
          "`app.listen()` starts a server and listens for incoming requests on a specified port and optional hostname. It's the method that makes your web application accessible.",
        options: [
          { id: "1", answer: "To define middleware." },
          { id: "2", answer: "To define routes." },
          {
            id: "3",
            answer: "To start the Express server and listen for connections.",
          },
          { id: "4", answer: "To handle errors." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "To start the Express server and listen for connections.",
          },
        ],
      },
      {
        id: "43",
        question:
          "Which built-in module is used to interact with operating system-specific functionalities?",
        description:
          "The `os` module provides operating system-related utility methods and properties, such as hostname, platform, CPU information, and memory usage.",
        options: [
          { id: "1", answer: "util" },
          { id: "2", answer: "fs" },
          { id: "3", answer: "process" },
          { id: "4", answer: "os" },
        ],
        correctAnswer: [{ id: "4", answer: "os" }],
      },
      {
        id: "44",
        question: "What is `middleware chaining` in Express.js?",
        description:
          "Middleware chaining refers to the sequential execution of multiple middleware functions for a single request. Each middleware function can perform an operation and then pass control to the next middleware in the chain using `next()`.",
        options: [
          { id: "1", answer: "Connecting multiple Express applications." },
          {
            id: "2",
            answer: "Executing multiple database queries sequentially.",
          },
          {
            id: "3",
            answer:
              "Running multiple middleware functions in sequence for a request.",
          },
          { id: "4", answer: "Passing data between different routes." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Running multiple middleware functions in sequence for a request.",
          },
        ],
      },
      {
        id: "45",
        question: "What is the role of `package-lock.json`?",
        description:
          "`package-lock.json` records the exact versions of all installed dependencies (including transitive dependencies) at the time of installation. It ensures that subsequent `npm install` runs produce identical `node_modules` trees, even if new versions of dependencies are published.",
        options: [
          { id: "1", answer: "To track changes in your source code." },
          { id: "2", answer: "To store environment variables securely." },
          {
            id: "3",
            answer:
              "To lock down the exact dependency versions for reproducible builds.",
          },
          { id: "4", answer: "To define custom scripts." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To lock down the exact dependency versions for reproducible builds.",
          },
        ],
      },
      {
        id: "46",
        question:
          "Which object represents the incoming HTTP request in Node.js HTTP server callback?",
        description:
          "In the callback function passed to `http.createServer()`, the first argument, conventionally named `req` (or `request`), is an `http.IncomingMessage` object representing the incoming request.",
        options: [
          { id: "1", answer: "res" },
          { id: "2", answer: "data" },
          { id: "3", answer: "req" },
          { id: "4", answer: "client" },
        ],
        correctAnswer: [{ id: "3", answer: "req" }],
      },
      {
        id: "47",
        question:
          "Which object represents the outgoing HTTP response in Node.js HTTP server callback?",
        description:
          "In the callback function passed to `http.createServer()`, the second argument, conventionally named `res` (or `response`), is an `http.ServerResponse` object representing the outgoing response.",
        options: [
          { id: "1", answer: "req" },
          { id: "2", answer: "server" },
          { id: "3", answer: "out" },
          { id: "4", answer: "res" },
        ],
        correctAnswer: [{ id: "4", answer: "res" }],
      },
      {
        id: "48",
        question: "What is a 'Stream' in Node.js?",
        description:
          "Streams are abstract interfaces for working with streaming data in Node.js. They are objects that allow you to read data from a source or write data to a destination in a continuous fashion, making them highly efficient for handling large amounts of data without loading it all into memory at once.",
        options: [
          { id: "1", answer: "A type of database connection." },
          {
            id: "2",
            answer: "A way to send data over a network instantaneously.",
          },
          {
            id: "3",
            answer:
              "An abstract interface for working with streaming data (e.g., file I/O, network).",
          },
          { id: "4", answer: "A method to compress data." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "An abstract interface for working with streaming data (e.g., file I/O, network).",
          },
        ],
      },
      {
        id: "49",
        question: "What is `process.nextTick()` used for?",
        description:
          "`process.nextTick()` schedules a callback function to be executed at the next iteration of the event loop, before any I/O operations or other timers. It's often used to defer execution of a function until the stack is clear, ensuring other synchronous code runs first.",
        options: [
          {
            id: "1",
            answer:
              "To schedule a function to run immediately on a new thread.",
          },
          {
            id: "2",
            answer: "To schedule a function to run after a specific delay.",
          },
          {
            id: "3",
            answer:
              "To defer the execution of a function to the next iteration of the event loop.",
          },
          { id: "4", answer: "To run a function synchronously." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To defer the execution of a function to the next iteration of the event loop.",
          },
        ],
      },
      {
        id: "50",
        question:
          "Which of the following describes Node.js's typical use case?",
        description:
          "Node.js excels at building scalable network applications, including real-time applications (chat, gaming), APIs (RESTful services), microservices, and streaming applications, due to its event-driven, non-blocking I/O model.",
        options: [
          {
            id: "1",
            answer: "Heavy computational tasks and CPU-bound operations.",
          },
          { id: "2", answer: "Complex scientific simulations." },
          {
            id: "3",
            answer:
              "Real-time applications, APIs, and microservices (I/O-bound operations).",
          },
          { id: "4", answer: "Desktop GUI applications only." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Real-time applications, APIs, and microservices (I/O-bound operations).",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Git and GitHub (Basics)",
    description:
      "Fundamental concepts of Git for version control and collaborative development using GitHub, including basic commands, workflows, and repository management.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What is Git?",
        description:
          "Git is a free and open-source distributed version control system (VCS) designed to handle everything from small to very large projects with speed and efficiency.",
        options: [
          { id: "1", answer: "A cloud storage service." },
          { id: "2", answer: "A programming language." },
          { id: "3", answer: "A distributed version control system." },
          { id: "4", answer: "An operating system." },
        ],
        correctAnswer: [
          { id: "3", answer: "A distributed version control system." },
        ],
      },
      {
        id: "2",
        question: "What is GitHub?",
        description:
          "GitHub is a web-based platform that provides hosting for software development and version control using Git. It's a popular platform for collaboration and open-source projects.",
        options: [
          { id: "1", answer: "A type of database." },
          { id: "2", answer: "A code editor." },
          {
            id: "3",
            answer: "A web-based hosting service for Git repositories.",
          },
          { id: "4", answer: "A mobile operating system." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A web-based hosting service for Git repositories.",
          },
        ],
      },
      {
        id: "3",
        question:
          "Which command is used to initialize a new Git repository in the current directory?",
        description:
          "The `git init` command creates a new, empty Git repository or reinitializes an existing one. It creates a `.git` directory in the current folder.",
        options: [
          { id: "1", answer: "git new" },
          { id: "2", answer: "git start" },
          { id: "3", answer: "git create" },
          { id: "4", answer: "git init" },
        ],
        correctAnswer: [{ id: "4", answer: "git init" }],
      },
      {
        id: "4",
        question: "What is the 'staging area' (or 'index') in Git?",
        description:
          "The staging area is an intermediate area where you prepare changes for your next commit. You add changes to the staging area using `git add`.",
        options: [
          { id: "1", answer: "The main branch of a repository." },
          { id: "2", answer: "A temporary storage for committed changes." },
          {
            id: "3",
            answer: "An area where changes are prepared before committing.",
          },
          { id: "4", answer: "The remote repository." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "An area where changes are prepared before committing.",
          },
        ],
      },
      {
        id: "5",
        question: "Which command is used to add changes to the staging area?",
        description:
          "The `git add` command adds changes from the working directory to the staging area. You can specify individual files or use `.` to add all changes.",
        options: [
          { id: "1", answer: "git save" },
          { id: "2", answer: "git stage" },
          { id: "3", answer: "git commit" },
          { id: "4", answer: "git add" },
        ],
        correctAnswer: [{ id: "4", answer: "git add" }],
      },
      {
        id: "6",
        question:
          "Which command is used to record changes to the repository with a message?",
        description:
          "The `git commit` command saves your staged changes to the local repository, along with a descriptive message that explains what changes were made.",
        options: [
          { id: "1", answer: "git save" },
          { id: "2", answer: "git record" },
          { id: "3", answer: "git push" },
          { id: "4", answer: "git commit" },
        ],
        correctAnswer: [{ id: "4", answer: "git commit" }],
      },
      {
        id: "7",
        question:
          "How do you check the status of your Git repository (staged, unstaged, untracked files)?",
        description:
          "The `git status` command displays the state of the working directory and the staging area. It shows which changes have been staged, which haven't, and which files aren't being tracked by Git.",
        options: [
          { id: "1", answer: "git log" },
          { id: "2", answer: "git diff" },
          { id: "3", answer: "git show" },
          { id: "4", answer: "git status" },
        ],
        correctAnswer: [{ id: "4", answer: "git status" }],
      },
      {
        id: "8",
        question: "Which command is used to view the commit history?",
        description:
          "The `git log` command shows the commit history for the current branch. It displays details like commit hash, author, date, and commit message.",
        options: [
          { id: "1", answer: "git history" },
          { id: "2", answer: "git show" },
          { id: "3", answer: "git view" },
          { id: "4", answer: "git log" },
        ],
        correctAnswer: [{ id: "4", answer: "git log" }],
      },
      {
        id: "9",
        question: "What is a 'branch' in Git?",
        description:
          "A branch in Git is a lightweight, movable pointer to a commit. It allows developers to diverge from the main line of development and work on new features or bug fixes independently.",
        options: [
          { id: "1", answer: "A copy of the entire repository." },
          { id: "2", answer: "A tag pointing to a specific commit." },
          {
            id: "3",
            answer: "A separate line of development in a repository.",
          },
          { id: "4", answer: "A folder to organize files." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A separate line of development in a repository.",
          },
        ],
      },
      {
        id: "10",
        question: "Which command creates a new branch?",
        description:
          "The `git branch <branch-name>` command creates a new branch, but it does not automatically switch to it.",
        options: [
          { id: "1", answer: "git new-branch" },
          { id: "2", answer: "git create-branch" },
          { id: "3", answer: "git branch new_branch_name" },
          { id: "4", answer: "git checkout -b new_branch_name" },
        ],
        correctAnswer: [{ id: "3", answer: "git branch new_branch_name" }],
      },
      {
        id: "11",
        question: "Which command switches to an existing branch?",
        description:
          "The `git checkout <branch-name>` command is used to switch from one branch to another.",
        options: [
          { id: "1", answer: "git move branch_name" },
          { id: "2", answer: "git switch branch_name" },
          { id: "3", answer: "git change branch_name" },
          { id: "4", answer: "git checkout branch_name" },
        ],
        correctAnswer: [{ id: "4", answer: "git checkout branch_name" }],
      },
      {
        id: "12",
        question:
          "Which command creates a new branch AND switches to it immediately?",
        description:
          "The `git checkout -b <new-branch-name>` command is a convenient shortcut to both create a new branch and switch to it in one step.",
        options: [
          { id: "1", answer: "git new-branch branch_name" },
          { id: "2", answer: "git branch --switch branch_name" },
          { id: "3", answer: "git checkout -b branch_name" },
          { id: "4", answer: "git switch --create branch_name" },
        ],
        correctAnswer: [{ id: "3", answer: "git checkout -b branch_name" }],
      },
      {
        id: "13",
        question: "What is 'merging' in Git?",
        description:
          "Merging is the process of combining a sequence of commits from one branch into another branch. It integrates changes from a source branch into a target branch.",
        options: [
          { id: "1", answer: "Deleting a branch." },
          { id: "2", answer: "Creating a new commit." },
          {
            id: "3",
            answer: "Combining changes from two or more branches into one.",
          },
          { id: "4", answer: "Saving changes to the staging area." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Combining changes from two or more branches into one.",
          },
        ],
      },
      {
        id: "14",
        question:
          "Which command is used to merge changes from another branch into the current branch?",
        description:
          "The `git merge <branch-name>` command is used to incorporate changes from the specified branch into the current branch.",
        options: [
          { id: "1", answer: "git combine branch_name" },
          { id: "2", answer: "git integrate branch_name" },
          { id: "3", answer: "git join branch_name" },
          { id: "4", answer: "git merge branch_name" },
        ],
        correctAnswer: [{ id: "4", answer: "git merge branch_name" }],
      },
      {
        id: "15",
        question: "What is a 'merge conflict'?",
        description:
          "A merge conflict occurs when Git cannot automatically reconcile changes between two branches being merged. This usually happens when the same lines of code are modified differently in both branches.",
        options: [
          { id: "1", answer: "An error when deleting a branch." },
          { id: "2", answer: "When two developers commit at the same time." },
          {
            id: "3",
            answer:
              "When Git cannot automatically combine conflicting changes during a merge.",
          },
          { id: "4", answer: "A warning about untracked files." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "When Git cannot automatically combine conflicting changes during a merge.",
          },
        ],
      },
      {
        id: "16",
        question: "How do you resolve a merge conflict?",
        description:
          "To resolve a merge conflict, you manually edit the conflicted files to choose which changes to keep, then add the resolved files to the staging area, and finally commit the changes.",
        options: [
          { id: "1", answer: "Delete both conflicting branches." },
          { id: "2", answer: "Run `git reset --hard`." },
          {
            id: "3",
            answer:
              "Manually edit files, `git add` resolved files, then `git commit`.",
          },
          { id: "4", answer: "Use `git clean -f`." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Manually edit files, `git add` resolved files, then `git commit`.",
          },
        ],
      },
      {
        id: "17",
        question:
          "Which command is used to send your local commits to a remote repository?",
        description:
          "The `git push` command is used to upload local repository content to a remote repository.",
        options: [
          { id: "1", answer: "git send" },
          { id: "2", answer: "git upload" },
          { id: "3", answer: "git pull" },
          { id: "4", answer: "git push" },
        ],
        correctAnswer: [{ id: "4", answer: "git push" }],
      },
      {
        id: "18",
        question:
          "Which command is used to fetch and integrate changes from a remote repository into your current branch?",
        description:
          "The `git pull` command is a combination of `git fetch` (downloads changes from remote) and `git merge` (integrates those changes into your local branch).",
        options: [
          { id: "1", answer: "git download" },
          { id: "2", answer: "git get" },
          { id: "3", answer: "git push" },
          { id: "4", answer: "git pull" },
        ],
        correctAnswer: [{ id: "4", answer: "git pull" }],
      },
      {
        id: "19",
        question: "What is `origin` in Git?",
        description:
          "`origin` is the default name Git gives to the remote repository from which you originally cloned your local repository. It acts as an alias for the URL of that remote repository.",
        options: [
          { id: "1", answer: "The main branch name." },
          { id: "2", answer: "The original commit in the history." },
          { id: "3", answer: "A default name for the remote repository." },
          { id: "4", answer: "The first user who created the repository." },
        ],
        correctAnswer: [
          { id: "3", answer: "A default name for the remote repository." },
        ],
      },
      {
        id: "20",
        question:
          "Which file should be used to specify untracked files or directories that Git should ignore?",
        description:
          "The `.gitignore` file specifies intentionally untracked files that Git should ignore. This is useful for temporary files, build artifacts, or sensitive information.",
        options: [
          { id: "1", answer: ".gitconfig" },
          { id: "2", answer: ".gitexclude" },
          { id: "3", answer: ".ignore" },
          { id: "4", answer: ".gitignore" },
        ],
        correctAnswer: [{ id: "4", answer: ".gitignore" }],
      },
      {
        id: "21",
        question:
          "What is a 'pull request' (or 'merge request' on GitLab) on GitHub?",
        description:
          "A pull request is a feature in GitHub (and similar platforms) that allows developers to propose changes and ask others to review and merge them into a target branch. It facilitates code review and collaboration.",
        options: [
          { id: "1", answer: "A request to delete a repository." },
          { id: "2", answer: "A request to download files from a repository." },
          {
            id: "3",
            answer:
              "A request to merge changes from one branch into another, usually involving code review.",
          },
          { id: "4", answer: "A command to revert changes." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A request to merge changes from one branch into another, usually involving code review.",
          },
        ],
      },
      {
        id: "22",
        question:
          "Which command is used to make a copy of a remote repository on your local machine?",
        description:
          "The `git clone` command is used to create a copy of an existing Git repository. It clones the entire history of the project.",
        options: [
          { id: "1", answer: "git copy" },
          { id: "2", answer: "git download" },
          { id: "3", answer: "git fetch" },
          { id: "4", answer: "git clone" },
        ],
        correctAnswer: [{ id: "4", answer: "git clone" }],
      },
      {
        id: "23",
        question: "What is the purpose of a 'fork' on GitHub?",
        description:
          "Forking a repository on GitHub creates a personal copy of another user's repository under your own GitHub account. This allows you to freely experiment with changes without affecting the original project.",
        options: [
          { id: "1", answer: "To create a new branch." },
          { id: "2", answer: "To star a repository." },
          {
            id: "3",
            answer:
              "To create a personal copy of someone else's repository to propose changes.",
          },
          { id: "4", answer: "To delete a repository from GitHub." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To create a personal copy of someone else's repository to propose changes.",
          },
        ],
      },
      {
        id: "24",
        question:
          "How do you view the differences between your working directory and the staging area?",
        description:
          "The `git diff` command shows changes between commits, commit and working tree, etc. When used without arguments, it shows changes in the working directory that are not yet staged.",
        options: [
          { id: "1", answer: "git status" },
          { id: "2", answer: "git log" },
          { id: "3", answer: "git show" },
          { id: "4", answer: "git diff" },
        ],
        correctAnswer: [{ id: "4", answer: "git diff" }],
      },
      {
        id: "25",
        question:
          "How do you view the differences between the staging area and the last commit?",
        description:
          "The `git diff --staged` (or `git diff --cached`) command shows the differences between the changes you've staged and the last commit.",
        options: [
          { id: "1", answer: "git diff" },
          { id: "2", answer: "git diff HEAD" },
          { id: "3", answer: "git diff --staged" },
          { id: "4", answer: "git show changes" },
        ],
        correctAnswer: [{ id: "3", answer: "git diff --staged" }],
      },
      {
        id: "26",
        question: "What is `HEAD` in Git?",
        description:
          "`HEAD` is a symbolic reference to the commit that your current branch is pointing to. It represents the tip of the current branch, and usually the latest commit.",
        options: [
          { id: "1", answer: "The first commit in the repository." },
          { id: "2", answer: "The name of the main branch." },
          {
            id: "3",
            answer: "A pointer to the current commit of the current branch.",
          },
          { id: "4", answer: "The remote repository." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A pointer to the current commit of the current branch.",
          },
        ],
      },
      {
        id: "27",
        question:
          "Which command would you use to remove a file from the staging area while keeping it in your working directory?",
        description:
          "The `git reset` command can be used to unstage changes. `git reset <file>` or `git reset HEAD <file>` unstages the specific file, moving it back from the index to the working directory.",
        options: [
          { id: "1", answer: "git rm --cached <file>" },
          { id: "2", answer: "git restore --staged <file>" },
          { id: "3", answer: "git remove <file>" },
          { id: "4", answer: "git unstage <file>" },
        ],
        correctAnswer: [{ id: "2", answer: "git restore --staged <file>" }],
      },
      {
        id: "28",
        question: "How do you add a remote repository to your local Git setup?",
        description:
          "The `git remote add <name> <url>` command creates a new remote tracking connection. `origin` is the conventional name for the primary remote.",
        options: [
          { id: "1", answer: "git link remote_name remote_url" },
          { id: "2", answer: "git connect remote_url" },
          { id: "3", answer: "git remote set-url remote_name remote_url" },
          { id: "4", answer: "git remote add origin remote_url" },
        ],
        correctAnswer: [
          { id: "4", answer: "git remote add origin remote_url" },
        ],
      },
      {
        id: "29",
        question: "What is the purpose of `git fetch`?",
        description:
          "`git fetch` downloads commits, files, and refs from a remote repository into your local repository. It doesn't automatically merge or modify your current working directory; it only updates your remote-tracking branches.",
        options: [
          { id: "1", answer: "To send local commits to the remote." },
          { id: "2", answer: "To merge changes from a remote branch." },
          {
            id: "3",
            answer:
              "To download changes from a remote repository without merging them.",
          },
          { id: "4", answer: "To delete files from the remote repository." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To download changes from a remote repository without merging them.",
          },
        ],
      },
      {
        id: "30",
        question: "What is `git pull --rebase` used for?",
        description:
          "`git pull --rebase` is used to apply your local commits on top of the fetched remote changes, effectively rewriting your local history to be linear. It avoids creating an extra merge commit.",
        options: [
          { id: "1", answer: "To force a push to the remote." },
          {
            id: "2",
            answer: "To fetch and merge, always creating a new merge commit.",
          },
          {
            id: "3",
            answer:
              "To fetch changes and reapply local commits on top, avoiding merge commits.",
          },
          {
            id: "4",
            answer: "To revert all changes to the last remote state.",
          },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To fetch changes and reapply local commits on top, avoiding merge commits.",
          },
        ],
      },
      {
        id: "31",
        question: "What is 'rebasing' in Git?",
        description:
          "Rebasing is the process of moving or combining a sequence of commits to a new base commit. It effectively rewrites the project history by creating new commits on top of another base, making the history linear.",
        options: [
          {
            id: "1",
            answer: "Combining two branches by creating a merge commit.",
          },
          { id: "2", answer: "Creating a new branch from an existing one." },
          {
            id: "3",
            answer: "Rewriting commit history by moving commits to a new base.",
          },
          { id: "4", answer: "Deleting commits from the history." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Rewriting commit history by moving commits to a new base.",
          },
        ],
      },
      {
        id: "32",
        question: "When might you prefer `git rebase` over `git merge`?",
        description:
          "Rebasing is often preferred for personal feature branches or when you want a clean, linear project history, as it avoids extra merge commits. However, it should be used with caution on shared branches.",
        options: [
          { id: "1", answer: "When working on the main branch directly." },
          { id: "2", answer: "When you want to preserve all merge commits." },
          {
            id: "3",
            answer:
              "When you want a clean, linear commit history without extra merge commits.",
          },
          { id: "4", answer: "When you want to revert changes easily." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "When you want a clean, linear commit history without extra merge commits.",
          },
        ],
      },
      {
        id: "33",
        question: "What is the `main` (or `master`) branch in Git?",
        description:
          "The `main` (formerly `master`) branch is the default development branch in a Git repository. It's conventionally where the stable, production-ready code resides.",
        options: [
          { id: "1", answer: "A branch used for experimental features." },
          { id: "2", answer: "The branch where all deleted files are stored." },
          {
            id: "3",
            answer:
              "The primary and default branch for stable code in a repository.",
          },
          { id: "4", answer: "A branch that cannot be deleted." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "The primary and default branch for stable code in a repository.",
          },
        ],
      },
      {
        id: "34",
        question: "What is a 'tag' in Git?",
        description:
          "A tag is a permanent, static pointer to a specific commit. It's often used to mark release points (e.g., v1.0, v2.0) in the project's history.",
        options: [
          { id: "1", answer: "A temporary label for a commit." },
          { id: "2", answer: "A branch that cannot be modified." },
          {
            id: "3",
            answer:
              "A permanent label/pointer to a specific commit, often for release versions.",
          },
          { id: "4", answer: "A way to categorize files in a repository." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A permanent label/pointer to a specific commit, often for release versions.",
          },
        ],
      },
      {
        id: "35",
        question: "Which command is used to delete a local branch?",
        description:
          "The `git branch -d <branch-name>` command is used to delete a local branch. It will prevent deletion if the branch has unmerged changes.",
        options: [
          { id: "1", answer: "git remove branch_name" },
          { id: "2", answer: "git delete branch_name" },
          { id: "3", answer: "git branch -d branch_name" },
          { id: "4", answer: "git erase branch_name" },
        ],
        correctAnswer: [{ id: "3", answer: "git branch -d branch_name" }],
      },
      {
        id: "36",
        question: "Which command is used to delete a remote branch?",
        description:
          "To delete a remote branch, you use `git push <remote-name> --delete <branch-name>` (or the shorthand `git push <remote-name> :<branch-name>`).",
        options: [
          { id: "1", answer: "git remote delete branch_name" },
          { id: "2", answer: "git push origin --delete branch_name" },
          { id: "3", answer: "git remove remote/branch_name" },
          { id: "4", answer: "git branch -D remote/branch_name" },
        ],
        correctAnswer: [
          { id: "2", answer: "git push origin --delete branch_name" },
        ],
      },
      {
        id: "37",
        question: "What is the purpose of `.gitconfig` file?",
        description:
          "The `.gitconfig` file stores Git's configuration settings. There can be system-wide, global (user-specific), and local (repository-specific) config files.",
        options: [
          { id: "1", answer: "To define ignored files." },
          { id: "2", answer: "To store commit messages." },
          {
            id: "3",
            answer:
              "To store Git configuration settings (e.g., user name, email).",
          },
          { id: "4", answer: "To manage remote repository URLs." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To store Git configuration settings (e.g., user name, email).",
          },
        ],
      },
      {
        id: "38",
        question: "What does `git reset --hard HEAD` do?",
        description:
          "`git reset --hard HEAD` discards all changes in the working directory and staging area, and moves the branch pointer to the `HEAD` commit (effectively undoing uncommitted work and resetting to the last commit). **Use with caution as it permanently deletes changes.**",
        options: [
          { id: "1", answer: "Adds all files to the staging area." },
          { id: "2", answer: "Creates a new branch from HEAD." },
          {
            id: "3",
            answer:
              "Discards all changes in the working directory and staging area, reverting to the last commit.",
          },
          { id: "4", answer: "Pushes changes to the remote repository." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Discards all changes in the working directory and staging area, reverting to the last commit.",
          },
        ],
      },
      {
        id: "39",
        question: "What does `git revert <commit-hash>` do?",
        description:
          "`git revert` creates a new commit that undoes the changes introduced by a specified commit. Unlike `reset`, it doesn't rewrite history, making it safe for shared branches.",
        options: [
          { id: "1", answer: "Deletes the specified commit from history." },
          {
            id: "2",
            answer:
              "Creates a new commit that undoes the changes of a previous commit.",
          },
          {
            id: "3",
            answer: "Moves the HEAD pointer to the specified commit.",
          },
          { id: "4", answer: "Restores a deleted file." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "Creates a new commit that undoes the changes of a previous commit.",
          },
        ],
      },
      {
        id: "40",
        question: "What is the purpose of `git stash`?",
        description:
          "`git stash` temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and reapply them later.",
        options: [
          { id: "1", answer: "To permanently delete unwanted changes." },
          { id: "2", answer: "To save changes to a new branch." },
          {
            id: "3",
            answer:
              "To temporarily save changes without committing them, allowing you to switch branches.",
          },
          { id: "4", answer: "To push changes to a hidden remote repository." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To temporarily save changes without committing them, allowing you to switch branches.",
          },
        ],
      },
      {
        id: "41",
        question: "Which command applies the most recently stashed changes?",
        description:
          "The `git stash pop` command retrieves the most recently stashed changes and applies them to your working directory, then removes the stash from the stash list.",
        options: [
          { id: "1", answer: "git stash apply" },
          { id: "2", answer: "git stash retrieve" },
          { id: "3", answer: "git stash get" },
          { id: "4", answer: "git stash pop" },
        ],
        correctAnswer: [{ id: "4", answer: "git stash pop" }],
      },
      {
        id: "42",
        question: "What is the difference between `git pull` and `git fetch`?",
        description:
          "`git fetch` downloads changes from the remote without integrating them into your local branch. `git pull` downloads the changes and immediately merges them into your current branch.",
        options: [
          { id: "1", answer: "`pull` sends changes, `fetch` receives them." },
          {
            id: "2",
            answer: "`fetch` only downloads, `pull` downloads AND merges.",
          },
          {
            id: "3",
            answer: "There is no difference; they are interchangeable.",
          },
          {
            id: "4",
            answer: "`pull` is for local repositories, `fetch` for remote.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "`fetch` only downloads, `pull` downloads AND merges.",
          },
        ],
      },
      {
        id: "43",
        question:
          "What is `SSH key` authentication commonly used for with GitHub?",
        description:
          "SSH keys provide a secure way to authenticate with GitHub (and other Git hosting services) without providing your username and password every time you interact with your repositories. It uses public-key cryptography.",
        options: [
          { id: "1", answer: "To encrypt your code before pushing." },
          { id: "2", answer: "To enable two-factor authentication." },
          {
            id: "3",
            answer:
              "To provide secure, passwordless authentication for Git operations.",
          },
          { id: "4", answer: "To limit access to specific branches." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To provide secure, passwordless authentication for Git operations.",
          },
        ],
      },
      {
        id: "44",
        question: "What is a 'forking workflow' on GitHub?",
        description:
          "The forking workflow is a common collaborative approach on GitHub where each developer forks the main repository, works on their own copy, and then submits pull requests to the original repository for their changes to be integrated.",
        options: [
          {
            id: "1",
            answer: "A workflow where all developers work on the same branch.",
          },
          {
            id: "2",
            answer:
              "A workflow where changes are pushed directly to the main branch.",
          },
          {
            id: "3",
            answer:
              "A distributed workflow where each developer has their own remote repository (fork) and contributes via pull requests.",
          },
          { id: "4", answer: "A workflow used only for open-source projects." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A distributed workflow where each developer has their own remote repository (fork) and contributes via pull requests.",
          },
        ],
      },
      {
        id: "45",
        question:
          "Which command is used to inspect a specific commit (show changes, author, message)?",
        description:
          "The `git show <commit-hash>` command displays the metadata and content changes of a specific commit.",
        options: [
          { id: "1", answer: "git view <commit-hash>" },
          { id: "2", answer: "git inspect <commit-hash>" },
          { id: "3", answer: "git diff <commit-hash>" },
          { id: "4", answer: "git show <commit-hash>" },
        ],
        correctAnswer: [{ id: "4", answer: "git show <commit-hash>" }],
      },
      {
        id: "46",
        question: "What is a 'detached HEAD' state in Git?",
        description:
          "A detached HEAD state occurs when `HEAD` points directly to a commit instead of a branch. This can happen when you `git checkout` a specific commit hash. Committing in this state will create 'unreachable' commits unless a new branch is created from them.",
        options: [
          { id: "1", answer: "A state where the repository is corrupted." },
          {
            id: "2",
            answer:
              "A state where `HEAD` points directly to a commit, not a branch.",
          },
          { id: "3", answer: "A state where there are no active branches." },
          {
            id: "4",
            answer: "A state where the remote repository is disconnected.",
          },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A state where `HEAD` points directly to a commit, not a branch.",
          },
        ],
      },
      {
        id: "47",
        question: "What is `git reflog` used for?",
        description:
          "`git reflog` records updates to the tips of branches and other references in the local repository. It's a powerful safety net that can help you recover lost commits or branches by showing every change to `HEAD`.",
        options: [
          { id: "1", answer: "To view remote repository activity." },
          {
            id: "2",
            answer:
              "To display a graphical representation of the commit history.",
          },
          {
            id: "3",
            answer:
              "To see a log of where HEAD and other refs have been, useful for recovering lost work.",
          },
          { id: "4", answer: "To configure Git settings." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To see a log of where HEAD and other refs have been, useful for recovering lost work.",
          },
        ],
      },
      {
        id: "48",
        question: "Which command is used to set your Git username globally?",
        description:
          'The `git config --global user.name "Your Name"` command sets the username that will be used for all commits you make on your system.',
        options: [
          { id: "1", answer: 'git user --set "Your Name"' },
          { id: "2", answer: 'git config user.name "Your Name"' },
          { id: "3", answer: 'git config --global user.name "Your Name"' },
          { id: "4", answer: 'git add user "Your Name"' },
        ],
        correctAnswer: [
          { id: "3", answer: 'git config --global user.name "Your Name"' },
        ],
      },
      {
        id: "49",
        question: "Which command is used to set your Git email globally?",
        description:
          'The `git config --global user.email "your_email@example.com"` command sets the email address that will be used for all commits you make on your system.',
        options: [
          { id: "1", answer: 'git email --set "your_email@example.com"' },
          { id: "2", answer: 'git config user.email "your_email@example.com"' },
          {
            id: "3",
            answer: 'git config --global user.email "your_email@example.com"',
          },
          { id: "4", answer: 'git add email "your_email@example.com"' },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: 'git config --global user.email "your_email@example.com"',
          },
        ],
      },
      {
        id: "50",
        question:
          "What is the purpose of `.git` directory inside a repository?",
        description:
          "The `.git` directory is a hidden directory created when you initialize a Git repository. It contains all the necessary information for your repository, including objects (commits, trees, blobs), refs (branches, tags), and configuration files. It's where Git stores its entire history and metadata.",
        options: [
          { id: "1", answer: "To store source code files." },
          { id: "2", answer: "To store external dependencies." },
          {
            id: "3",
            answer:
              "To hold all the necessary files for the Git repository's history and configuration.",
          },
          { id: "4", answer: "To keep temporary build files." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To hold all the necessary files for the Git repository's history and configuration.",
          },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Python (Core Concepts)",
    description:
      "Fundamental concepts of Python programming, including data types, control flow, functions, object-oriented basics, and common built-in features.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question:
          "Which of the following is a correct way to comment a single line in Python?",
        description:
          "In Python, single-line comments start with a hash symbol (#). Anything after the # on that line is considered a comment.",
        options: [
          { id: "1", answer: "// This is a comment" },
          { id: "2", answer: "/* This is a comment */" },
          { id: "3", answer: "# This is a comment" },
          { id: "4", answer: "-- This is a comment" },
        ],
        correctAnswer: [{ id: "3", answer: "# This is a comment" }],
      },
      {
        id: "2",
        question: "Which keyword is used to define a function in Python?",
        description:
          "The `def` keyword is used to define (declare) a function in Python. It is followed by the function name, parentheses for parameters, and a colon.",
        options: [
          { id: "1", answer: "func" },
          { id: "2", answer: "function" },
          { id: "3", answer: "define" },
          { id: "4", answer: "def" },
        ],
        correctAnswer: [{ id: "4", answer: "def" }],
      },
      {
        id: "3",
        question: "What is the output of `print(type([]))` in Python?",
        description:
          "`[]` represents a list in Python. The `type()` function returns the type of the object passed to it.",
        options: [
          { id: "1", answer: "<class 'array'>" },
          { id: "2", answer: "<class 'tuple'>" },
          { id: "3", answer: "<class 'list'>" },
          { id: "4", answer: "<class 'dict'>" },
        ],
        correctAnswer: [{ id: "3", answer: "<class 'list'>" }],
      },
      {
        id: "4",
        question: "Which of the following is a mutable data type in Python?",
        description:
          "Mutable data types can be changed after they are created. Lists are mutable, while strings, tuples, and numbers are immutable.",
        options: [
          { id: "1", answer: "String" },
          { id: "2", answer: "Tuple" },
          { id: "3", answer: "Integer" },
          { id: "4", answer: "List" },
        ],
        correctAnswer: [{ id: "4", answer: "List" }],
      },
      {
        id: "5",
        question: "How do you correctly create a dictionary in Python?",
        description:
          "Dictionaries in Python are unordered collections of key-value pairs, enclosed in curly braces `{}`. Keys and values are separated by a colon, and pairs are separated by commas.",
        options: [
          { id: "1", answer: "my_dict = [key: value, key: value]" },
          { id: "2", answer: "my_dict = (key: value, key: value)" },
          { id: "3", answer: "my_dict = {key: value, key: value}" },
          { id: "4", answer: "my_dict = {'key'=value, 'key'=value}" },
        ],
        correctAnswer: [
          { id: "3", answer: "my_dict = {key: value, key: value}" },
        ],
      },
      {
        id: "6",
        question:
          "Which loop is used for iterating over a sequence (like a list or string) in Python?",
        description:
          "The `for` loop in Python is commonly used for iterating over elements of a sequence (like lists, tuples, strings, or other iterable objects).",
        options: [
          { id: "1", answer: "do-while" },
          { id: "2", answer: "repeat" },
          { id: "3", answer: "for" },
          { id: "4", answer: "loop" },
        ],
        correctAnswer: [{ id: "3", answer: "for" }],
      },
      {
        id: "7",
        question:
          "What is the correct syntax to check if two values `a` and `b` are equal in Python?",
        description:
          "The `==` operator is used for equality comparison in Python. It checks if the values of two operands are equal.",
        options: [
          { id: "1", answer: "if a = b:" },
          { id: "2", answer: "if a == b:" },
          { id: "3", answer: "if a === b:" },
          { id: "4", answer: "if a equals b:" },
        ],
        correctAnswer: [{ id: "2", answer: "if a == b:" }],
      },
      {
        id: "8",
        question: "What is the output of `len('Python')`?",
        description:
          "The `len()` function returns the number of items in an object. For a string, it returns the number of characters.",
        options: [
          { id: "1", answer: "5" },
          { id: "2", answer: "6" },
          { id: "3", answer: "7" },
          { id: "4", answer: "Error" },
        ],
        correctAnswer: [{ id: "2", answer: "6" }],
      },
      {
        id: "9",
        question: "Which of the following is an immutable data type in Python?",
        description:
          "Immutable data types cannot be changed after they are created. Tuples are immutable, unlike lists, dictionaries, and sets which are mutable.",
        options: [
          { id: "1", answer: "List" },
          { id: "2", answer: "Dictionary" },
          { id: "3", answer: "Set" },
          { id: "4", answer: "Tuple" },
        ],
        correctAnswer: [{ id: "4", answer: "Tuple" }],
      },
      {
        id: "10",
        question: "What does the `range()` function do?",
        description:
          "The `range()` function generates a sequence of numbers, which is commonly used for iterating a specific number of times in a `for` loop.",
        options: [
          { id: "1", answer: "Generates a random number." },
          { id: "2", answer: "Calculates the maximum value in a list." },
          { id: "3", answer: "Creates a sequence of numbers." },
          { id: "4", answer: "Returns the number of elements in a list." },
        ],
        correctAnswer: [{ id: "3", answer: "Creates a sequence of numbers." }],
      },
      {
        id: "11",
        question:
          "What is the correct way to open a file named 'data.txt' for reading in Python?",
        description:
          "The `open()` function is used to open files. The first argument is the filename, and the second argument is the mode. 'r' stands for read mode.",
        options: [
          { id: "1", answer: "file = open('data.txt', 'write')" },
          { id: "2", answer: "file = read('data.txt')" },
          { id: "3", answer: "file = open('data.txt', 'r')" },
          { id: "4", answer: "file = new File('data.txt')" },
        ],
        correctAnswer: [{ id: "3", answer: "file = open('data.txt', 'r')" }],
      },
      {
        id: "12",
        question: "Which keyword is used to exit a loop prematurely?",
        description:
          "The `break` statement is used to terminate the loop entirely. When `break` is encountered, the loop is exited, and execution continues with the statement immediately following the loop.",
        options: [
          { id: "1", answer: "exit" },
          { id: "2", answer: "stop" },
          { id: "3", answer: "break" },
          { id: "4", answer: "quit" },
        ],
        correctAnswer: [{ id: "3", answer: "break" }],
      },
      {
        id: "13",
        question: "What is the purpose of `self` in Python class methods?",
        description:
          "In Python, `self` is a convention used as the first parameter in instance methods. It refers to the instance of the class itself, allowing access to its attributes and methods.",
        options: [
          { id: "1", answer: "It refers to the class itself." },
          { id: "2", answer: "It is a keyword for global variables." },
          {
            id: "3",
            answer: "It refers to the current instance of the class.",
          },
          { id: "4", answer: "It is used to define static methods." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "It refers to the current instance of the class.",
          },
        ],
      },
      {
        id: "14",
        question: "Which operator is used for exponentiation in Python?",
        description:
          "The `**` operator is used for exponentiation (raising a number to a power) in Python. For example, `2 ** 3` evaluates to 8.",
        options: [
          { id: "1", answer: "^" },
          { id: "2", answer: "*" },
          { id: "3", answer: "//" },
          { id: "4", answer: "**" },
        ],
        correctAnswer: [{ id: "4", answer: "**" }],
      },
      {
        id: "15",
        question:
          "What will be the output of the following code?\n`x = 10`\n`y = 3`\n`print(x % y)`",
        description:
          "The `%` operator performs the modulo operation, which returns the remainder of the division. `10 divided by 3 is 3 with a remainder of 1`.",
        options: [
          { id: "1", answer: "3" },
          { id: "2", answer: "1" },
          { id: "3", answer: "0" },
          { id: "4", answer: "3.33" },
        ],
        correctAnswer: [{ id: "2", answer: "1" }],
      },
      {
        id: "16",
        question: "How do you create an empty list named `my_list` in Python?",
        description:
          "An empty list can be created using square brackets `[]` or the `list()` constructor.",
        options: [
          { id: "1", answer: "my_list = {}" },
          { id: "2", answer: "my_list = ()" },
          { id: "3", answer: "my_list = []" },
          { id: "4", answer: "my_list = new List()" },
        ],
        correctAnswer: [{ id: "3", answer: "my_list = []" }],
      },
      {
        id: "17",
        question:
          "Which module in Python is used for working with mathematical functions?",
        description:
          "The `math` module provides access to mathematical functions like `sqrt`, `sin`, `cos`, `pi`, etc.",
        options: [
          { id: "1", answer: "calc" },
          { id: "2", answer: "numbers" },
          { id: "3", answer: "math" },
          { id: "4", answer: "numeric" },
        ],
        correctAnswer: [{ id: "3", answer: "math" }],
      },
      {
        id: "18",
        question: "What is the output of `'hello' + 'world'`?",
        description:
          "The `+` operator performs string concatenation in Python.",
        options: [
          { id: "1", answer: "helloworld" },
          { id: "2", answer: "hello world" },
          { id: "3", answer: "hello + world" },
          { id: "4", answer: "Error" },
        ],
        correctAnswer: [{ id: "1", answer: "helloworld" }],
      },
      {
        id: "19",
        question: "What is the purpose of the `elif` keyword in Python?",
        description:
          "`elif` (else if) is used in conditional statements to check multiple conditions sequentially. It allows you to specify a new condition to check if the previous `if` or `elif` conditions were false.",
        options: [
          { id: "1", answer: "To define an else block." },
          {
            id: "2",
            answer: "To specify multiple conditions after an `if` statement.",
          },
          { id: "3", answer: "To create a loop." },
          { id: "4", answer: "To handle exceptions." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer: "To specify multiple conditions after an `if` statement.",
          },
        ],
      },
      {
        id: "20",
        question: "What does `pip` stand for in Python?",
        description:
          "PIP is the preferred installer program for Python packages. It allows you to install and manage additional libraries that are not part of the Python standard library.",
        options: [
          { id: "1", answer: "Python Installation Program" },
          { id: "2", answer: "Preferred Installer Program" },
          { id: "3", answer: "Package Information Processor" },
          { id: "4", answer: "Python Package Indexer" },
        ],
        correctAnswer: [{ id: "2", answer: "Preferred Installer Program" }],
      },
      {
        id: "21",
        question: "How do you install a package using pip?",
        description:
          "The command `pip install <package_name>` is used to install Python packages from the Python Package Index (PyPI).",
        options: [
          { id: "1", answer: "python install package_name" },
          { id: "2", answer: "install package_name" },
          { id: "3", answer: "pip add package_name" },
          { id: "4", answer: "pip install package_name" },
        ],
        correctAnswer: [{ id: "4", answer: "pip install package_name" }],
      },
      {
        id: "22",
        question: "What is the output of `print(type((1, 2, 3)))`?",
        description:
          "`()` with comma-separated values defines a tuple in Python. The `type()` function identifies it as a tuple.",
        options: [
          { id: "1", answer: "<class 'list'>" },
          { id: "2", answer: "<class 'set'>" },
          { id: "3", answer: "<class 'tuple'>" },
          { id: "4", answer: "<class 'dict'>" },
        ],
        correctAnswer: [{ id: "3", answer: "<class 'tuple'>" }],
      },
      {
        id: "23",
        question: "Which method is used to add an item to the end of a list?",
        description:
          "The `append()` method adds a single item to the end of a list. `extend()` adds elements of an iterable.",
        options: [
          { id: "1", answer: "add()" },
          { id: "2", answer: "insert_last()" },
          { id: "3", answer: "append()" },
          { id: "4", answer: "put()" },
        ],
        correctAnswer: [{ id: "3", answer: "append()" }],
      },
      {
        id: "24",
        question:
          "What is the purpose of the `__init__` method in a Python class?",
        description:
          "The `__init__` method is a special method called a constructor. It is automatically called when a new instance of a class is created, allowing you to initialize the object's attributes.",
        options: [
          { id: "1", answer: "To destroy an object." },
          { id: "2", answer: "To define static methods." },
          {
            id: "3",
            answer:
              "To initialize the attributes of an object when it's created.",
          },
          { id: "4", answer: "To define private methods." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To initialize the attributes of an object when it's created.",
          },
        ],
      },
      {
        id: "25",
        question: "How do you cast a string '123' to an integer in Python?",
        description:
          "The `int()` constructor function can convert a string containing an integer representation into an actual integer type.",
        options: [
          { id: "1", answer: "str.to_int('123')" },
          { id: "2", answer: "int('123')" },
          { id: "3", answer: "convert_int('123')" },
          { id: "4", answer: "parse_int('123')" },
        ],
        correctAnswer: [{ id: "2", answer: "int('123')" }],
      },
      {
        id: "26",
        question: "What is a 'docstring' in Python?",
        description:
          "A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. It's used to explain the purpose and usage of the code and can be accessed via `__doc__` attribute.",
        options: [
          { id: "1", answer: "A comment that spans multiple lines." },
          { id: "2", answer: "A string used for logging errors." },
          { id: "3", answer: "A built-in function for documentation." },
          {
            id: "4",
            answer:
              "A string literal used for documenting modules, functions, classes, or methods.",
          },
        ],
        correctAnswer: [
          {
            id: "4",
            answer:
              "A string literal used for documenting modules, functions, classes, or methods.",
          },
        ],
      },
      {
        id: "27",
        question:
          "Which of the following is correct for string formatting using an f-string?",
        description:
          "F-strings (formatted string literals) are prefixed with `f` or `F` and allow you to embed expressions directly inside string literals by placing them inside curly braces `{}`.",
        options: [
          { id: "1", answer: "`'My name is {name}'.format(name='Alice')`" },
          { id: "2", answer: "`'My name is %s' % name`" },
          { id: "3", answer: "`f'My name is {name}'`" },
          { id: "4", answer: "`'My name is ' + name`" },
        ],
        correctAnswer: [{ id: "3", answer: "`f'My name is {name}'`" }],
      },
      {
        id: "28",
        question: "What does the `pass` statement do in Python?",
        description:
          "The `pass` statement is a null operation; nothing happens when it is executed. It is used as a placeholder where a statement is syntactically required but you don't want any code to execute.",
        options: [
          { id: "1", answer: "It passes a variable to another function." },
          { id: "2", answer: "It indicates the end of a block of code." },
          {
            id: "3",
            answer:
              "It is a null operation; it does nothing and serves as a placeholder.",
          },
          { id: "4", answer: "It skips the current iteration of a loop." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "It is a null operation; it does nothing and serves as a placeholder.",
          },
        ],
      },
      {
        id: "29",
        question: "What is the purpose of `try`, `except`, `finally` blocks?",
        description:
          "`try`, `except`, and `finally` blocks are used for error handling (exception handling). `try` contains code that might raise an exception, `except` handles specific exceptions, and `finally` ensures code runs regardless of whether an exception occurred.",
        options: [
          { id: "1", answer: "For defining loops." },
          { id: "2", answer: "For conditional execution." },
          { id: "3", answer: "For handling exceptions (errors)." },
          { id: "4", answer: "For importing modules." },
        ],
        correctAnswer: [
          { id: "3", answer: "For handling exceptions (errors)." },
        ],
      },
      {
        id: "30",
        question:
          "Which built-in function returns the absolute value of a number?",
        description:
          "The `abs()` function returns the absolute (positive) value of a number.",
        options: [
          { id: "1", answer: "absolute()" },
          { id: "2", answer: "pos()" },
          { id: "3", answer: "abs()" },
          { id: "4", answer: "magnitude()" },
        ],
        correctAnswer: [{ id: "3", answer: "abs()" }],
      },
      {
        id: "31",
        question: "What is a 'lambda' function in Python?",
        description:
          "A lambda function (also known as an anonymous function) is a small, single-expression function that can have any number of arguments but only one expression. It is defined using the `lambda` keyword.",
        options: [
          { id: "1", answer: "A function that takes no arguments." },
          { id: "2", answer: "A function that returns multiple values." },
          {
            id: "3",
            answer:
              "A small anonymous function defined with the `lambda` keyword.",
          },
          { id: "4", answer: "A function that is part of a class." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A small anonymous function defined with the `lambda` keyword.",
          },
        ],
      },
      {
        id: "32",
        question: "Which of these is NOT a valid Python variable name?",
        description:
          "Variable names in Python must start with a letter or an underscore. They cannot start with a number. `2my_variable` is invalid.",
        options: [
          { id: "1", answer: "my_variable" },
          { id: "2", answer: "_private_var" },
          { id: "3", answer: "2my_variable" },
          { id: "4", answer: "myVariable" },
        ],
        correctAnswer: [{ id: "3", answer: "2my_variable" }],
      },
      {
        id: "33",
        question: "What is the result of `True and False`?",
        description:
          "The `and` operator performs a logical AND operation. It returns `True` if both operands are `True`, otherwise `False`.",
        options: [
          { id: "1", answer: "True" },
          { id: "2", answer: "False" },
          { id: "3", answer: "None" },
          { id: "4", answer: "Error" },
        ],
        correctAnswer: [{ id: "2", answer: "False" }],
      },
      {
        id: "34",
        question: "What is the purpose of the `global` keyword?",
        description:
          "The `global` keyword is used inside a function to declare that a variable is a global variable (i.e., defined outside the function's scope) and that its value should be modified globally, not locally within the function.",
        options: [
          { id: "1", answer: "To define a new function." },
          {
            id: "2",
            answer: "To make a variable accessible only within a function.",
          },
          {
            id: "3",
            answer:
              "To declare a variable as global and modify it within a function.",
          },
          { id: "4", answer: "To import a module." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To declare a variable as global and modify it within a function.",
          },
        ],
      },
      {
        id: "35",
        question: "Which built-in function is used to get input from the user?",
        description:
          "The `input()` function prompts the user for input and returns whatever the user types as a string.",
        options: [
          { id: "1", answer: "get_input()" },
          { id: "2", answer: "read()" },
          { id: "3", answer: "input()" },
          { id: "4", answer: "console.read()" },
        ],
        correctAnswer: [{ id: "3", answer: "input()" }],
      },
      {
        id: "36",
        question: "What does `list.pop()` do without an argument?",
        description:
          "The `pop()` method removes and returns the last item from the list when no index is specified.",
        options: [
          { id: "1", answer: "Removes the first item." },
          { id: "2", answer: "Removes a specific item by value." },
          { id: "3", answer: "Removes and returns the last item." },
          { id: "4", answer: "Clears the entire list." },
        ],
        correctAnswer: [
          { id: "3", answer: "Removes and returns the last item." },
        ],
      },
      {
        id: "37",
        question: "What is the output of `'Python'.replace('o', 'O')`?",
        description:
          "The `replace()` string method returns a new string where all occurrences of a substring are replaced with another substring.",
        options: [
          { id: "1", answer: "PythOn" },
          { id: "2", answer: "pythOn" },
          { id: "3", answer: "Python" },
          { id: "4", answer: "Pythen" },
        ],
        correctAnswer: [{ id: "1", answer: "PythOn" }],
      },
      {
        id: "38",
        question: "Which of the following is true about sets in Python?",
        description:
          "Sets are unordered collections of unique elements. They are mutable, meaning you can add or remove items after creation.",
        options: [
          { id: "1", answer: "Sets allow duplicate elements." },
          { id: "2", answer: "Sets are ordered." },
          {
            id: "3",
            answer: "Sets are mutable collections of unique elements.",
          },
          { id: "4", answer: "Sets are accessed by index." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Sets are mutable collections of unique elements.",
          },
        ],
      },
      {
        id: "39",
        question: "What is the output of `[1, 2, 3] * 2`?",
        description:
          "Multiplying a list by an integer `n` creates a new list containing `n` shallow copies of the original list's elements.",
        options: [
          { id: "1", answer: "[1, 2, 3, 1, 2, 3]" },
          { id: "2", answer: "[2, 4, 6]" },
          { id: "3", answer: "Error" },
          { id: "4", answer: "[1, 2, 3]" },
        ],
        correctAnswer: [{ id: "1", answer: "[1, 2, 3, 1, 2, 3]" }],
      },
      {
        id: "40",
        question: "What is the purpose of `__name__ == '__main__'`?",
        description:
          "This common Python idiom ensures that the code inside the `if` block only runs when the script is executed directly (as the main program), not when it's imported as a module into another script.",
        options: [
          { id: "1", answer: "It defines a new module." },
          { id: "2", answer: "It marks the start of a function." },
          {
            id: "3",
            answer:
              "It runs code only when the script is executed directly, not imported as a module.",
          },
          { id: "4", answer: "It defines the main function in a class." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "It runs code only when the script is executed directly, not imported as a module.",
          },
        ],
      },
      {
        id: "41",
        question: "Which built-in function converts an iterable to a tuple?",
        description:
          "The `tuple()` constructor function can convert any iterable (like a list, string, or set) into a tuple.",
        options: [
          { id: "1", answer: "list_to_tuple()" },
          { id: "2", answer: "to_tuple()" },
          { id: "3", answer: "make_tuple()" },
          { id: "4", answer: "tuple()" },
        ],
        correctAnswer: [{ id: "4", answer: "tuple()" }],
      },
      {
        id: "42",
        question: "What is a 'list comprehension' in Python?",
        description:
          "List comprehensions provide a concise way to create lists. It consists of brackets containing an expression followed by a `for` clause, then zero or more `for` or `if` clauses, often offering a more readable and efficient alternative to traditional loops for list creation.",
        options: [
          { id: "1", answer: "A method to copy a list." },
          { id: "2", answer: "A way to compare two lists." },
          {
            id: "3",
            answer:
              "A concise syntax for creating lists based on existing iterables.",
          },
          {
            id: "4",
            answer: "A function that converts a list to a dictionary.",
          },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A concise syntax for creating lists based on existing iterables.",
          },
        ],
      },
      {
        id: "43",
        question:
          "What is the default value of arguments in Python functions if not provided?",
        description:
          "If a function parameter is not given a default value, it becomes a required argument. If the caller doesn't provide a value, Python raises a `TypeError`.",
        options: [
          { id: "1", answer: "0" },
          { id: "2", answer: "None" },
          { id: "3", answer: "Empty string" },
          {
            id: "4",
            answer:
              "There is no default value; it will raise an error if not provided.",
          },
        ],
        correctAnswer: [
          {
            id: "4",
            answer:
              "There is no default value; it will raise an error if not provided.",
          },
        ],
      },
      {
        id: "44",
        question:
          "Which built-in function returns the smallest item in an iterable?",
        description:
          "The `min()` function returns the smallest item in an iterable or the smallest of two or more arguments.",
        options: [
          { id: "1", answer: "smallest()" },
          { id: "2", answer: "min_val()" },
          { id: "3", answer: "min()" },
          { id: "4", answer: "lower()" },
        ],
        correctAnswer: [{ id: "3", answer: "min()" }],
      },
      {
        id: "45",
        question: "What is method overloading in Python?",
        description:
          "Python does not support traditional method overloading (where multiple methods with the same name but different parameters exist). If you define multiple methods with the same name in a class, the last one defined will overwrite the previous ones.",
        options: [
          {
            id: "1",
            answer:
              "Defining multiple methods with the same name in the same class but different parameters.",
          },
          {
            id: "2",
            answer:
              "Defining a method in a child class with the same name as in the parent class.",
          },
          {
            id: "3",
            answer:
              "Python does not support method overloading in the traditional sense; the last definition overwrites previous ones.",
          },
          { id: "4", answer: "Using multiple decorators on a single method." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Python does not support method overloading in the traditional sense; the last definition overwrites previous ones.",
          },
        ],
      },
      {
        id: "46",
        question: "What is a 'decorator' in Python?",
        description:
          "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. Decorators are essentially functions that take another function as an argument and return a new function.",
        options: [
          { id: "1", answer: "A function that styles output." },
          { id: "2", answer: "A way to add comments to code." },
          {
            id: "3",
            answer:
              "A function that takes another function and extends or modifies its behavior.",
          },
          { id: "4", answer: "A special type of variable." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A function that takes another function and extends or modifies its behavior.",
          },
        ],
      },
      {
        id: "47",
        question: "What does the `zip()` function do?",
        description:
          "The `zip()` function pairs up elements from multiple iterables (lists, tuples, etc.) into a single iterator of tuples. For example, `zip([1,2],[a,b])` would yield `(1,a), (2,b)`.",
        options: [
          { id: "1", answer: "Unzips a compressed file." },
          { id: "2", answer: "Combines two strings." },
          {
            id: "3",
            answer: "Combines elements from multiple iterables into tuples.",
          },
          { id: "4", answer: "Compresses a list." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Combines elements from multiple iterables into tuples.",
          },
        ],
      },
      {
        id: "48",
        question: "What is the difference between `==` and `is` in Python?",
        description:
          "`==` checks for equality of values (do they have the same content?), while `is` checks for identity (do they refer to the exact same object in memory?).",
        options: [
          { id: "1", answer: "`==` compares identity, `is` compares value." },
          {
            id: "2",
            answer:
              "`==` compares value, `is` compares identity (same object in memory).",
          },
          { id: "3", answer: "They are interchangeable operators." },
          { id: "4", answer: "`is` is for numbers, `==` is for strings." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "`==` compares value, `is` compares identity (same object in memory).",
          },
        ],
      },
      {
        id: "49",
        question: "What is `PEP 8`?",
        description:
          "PEP 8 is Python's official style guide, providing conventions for writing readable and maintainable Python code.",
        options: [
          { id: "1", answer: "A Python package manager." },
          { id: "2", answer: "A type of error in Python." },
          {
            id: "3",
            answer: "Python's official style guide for writing readable code.",
          },
          { id: "4", answer: "A new version of Python." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "Python's official style guide for writing readable code.",
          },
        ],
      },
      {
        id: "50",
        question: "Which keyword is used to return a value from a function?",
        description:
          "The `return` statement is used to exit a function and optionally send a value back to the caller.",
        options: [
          { id: "1", answer: "send" },
          { id: "2", answer: "output" },
          { id: "3", answer: "yield" },
          { id: "4", answer: "return" },
        ],
        correctAnswer: [{ id: "4", answer: "return" }],
      },
    ],
  },
  {
    id: "10",
    title: "SQL (Basics)",
    description:
      "Fundamental concepts of Structured Query Language (SQL) for managing and manipulating relational databases, including basic data definition (DDL) and data manipulation (DML) commands.",
    examTime: "60:00",
    questions: [
      {
        id: "1",
        question: "What does SQL stand for?",
        description:
          "SQL stands for Structured Query Language. It is a standard language for storing, manipulating and retrieving data in databases.",
        options: [
          { id: "1", answer: "Structured Question Language" },
          { id: "2", answer: "Standard Query Logic" },
          { id: "3", answer: "Structured Query Language" },
          { id: "4", answer: "Simple Query Language" },
        ],
        correctAnswer: [{ id: "3", answer: "Structured Query Language" }],
      },
      {
        id: "2",
        question:
          "Which SQL statement is used to extract data from a database?",
        description:
          "The `SELECT` statement is used to query the database and retrieve data that matches the specified criteria.",
        options: [
          { id: "1", answer: "GET" },
          { id: "2", answer: "UPDATE" },
          { id: "3", answer: "SELECT" },
          { id: "4", answer: "EXTRACT" },
        ],
        correctAnswer: [{ id: "3", answer: "SELECT" }],
      },
      {
        id: "3",
        question: "Which SQL statement is used to update data in a database?",
        description:
          "The `UPDATE` statement is used to modify existing records in a table.",
        options: [
          { id: "1", answer: "MODIFY" },
          { id: "2", answer: "SAVE" },
          { id: "3", answer: "CHANGE" },
          { id: "4", answer: "UPDATE" },
        ],
        correctAnswer: [{ id: "4", answer: "UPDATE" }],
      },
      {
        id: "4",
        question: "Which SQL statement is used to delete data from a database?",
        description:
          "The `DELETE` statement is used to remove one or more rows from a table.",
        options: [
          { id: "1", answer: "REMOVE" },
          { id: "2", answer: "DROP" },
          { id: "3", answer: "ERASE" },
          { id: "4", answer: "DELETE" },
        ],
        correctAnswer: [{ id: "4", answer: "DELETE" }],
      },
      {
        id: "5",
        question:
          "Which SQL statement is used to insert new data into a database?",
        description:
          "The `INSERT INTO` statement is used to add new records (rows) to a table.",
        options: [
          { id: "1", answer: "ADD NEW" },
          { id: "2", answer: "PUT IN" },
          { id: "3", answer: "INSERT INTO" },
          { id: "4", answer: "NEW RECORD" },
        ],
        correctAnswer: [{ id: "3", answer: "INSERT INTO" }],
      },
      {
        id: "6",
        question: "Which SQL keyword is used to sort the result-set?",
        description:
          "The `ORDER BY` clause is used to sort the result-set of a query in ascending or descending order.",
        options: [
          { id: "1", answer: "SORT BY" },
          { id: "2", answer: "ORDER ASC/DESC" },
          { id: "3", answer: "SORT" },
          { id: "4", answer: "ORDER BY" },
        ],
        correctAnswer: [{ id: "4", answer: "ORDER BY" }],
      },
      {
        id: "7",
        question: "Which keyword is used to select only unique values?",
        description:
          "The `DISTINCT` keyword is used in conjunction with `SELECT` to return only unique values, eliminating duplicate rows from the result set.",
        options: [
          { id: "1", answer: "UNIQUE" },
          { id: "2", answer: "SINGLE" },
          { id: "3", answer: "ONLY" },
          { id: "4", answer: "DISTINCT" },
        ],
        correctAnswer: [{ id: "4", answer: "DISTINCT" }],
      },
      {
        id: "8",
        question: "The `WHERE` clause is used to _______ records.",
        description:
          "The `WHERE` clause is used to filter records, extracting only those that fulfill a specified condition.",
        options: [
          { id: "1", answer: "sort" },
          { id: "2", answer: "update" },
          { id: "3", answer: "delete" },
          { id: "4", answer: "filter" },
        ],
        correctAnswer: [{ id: "4", answer: "filter" }],
      },
      {
        id: "9",
        question:
          "Which operator is used to search for a specified pattern in a column?",
        description:
          "The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.",
        options: [
          { id: "1", answer: "=" },
          { id: "2", answer: "MATCH" },
          { id: "3", answer: "SEARCH" },
          { id: "4", answer: "LIKE" },
        ],
        correctAnswer: [{ id: "4", answer: "LIKE" }],
      },
      {
        id: "10",
        question:
          "Which of the following is NOT a DML (Data Manipulation Language) command?",
        description:
          "DDL (Data Definition Language) commands are used to define or modify database structures. `CREATE TABLE` is a DDL command. `SELECT`, `INSERT`, and `UPDATE` are DML commands for manipulating data.",
        options: [
          { id: "1", answer: "SELECT" },
          { id: "2", answer: "INSERT" },
          { id: "3", answer: "CREATE TABLE" },
          { id: "4", answer: "UPDATE" },
        ],
        correctAnswer: [{ id: "3", answer: "CREATE TABLE" }],
      },
      {
        id: "11",
        question: "Which SQL statement creates a new table in the database?",
        description:
          "The `CREATE TABLE` statement is used to define and create a new table with specified column names and data types.",
        options: [
          { id: "1", answer: "ADD TABLE" },
          { id: "2", answer: "NEW TABLE" },
          { id: "3", answer: "CREATE TABLE" },
          { id: "4", answer: "BUILD TABLE" },
        ],
        correctAnswer: [{ id: "3", answer: "CREATE TABLE" }],
      },
      {
        id: "12",
        question:
          "Which SQL statement is used to remove an existing table from the database?",
        description:
          "The `DROP TABLE` statement is used to delete an entire table, including its data and structure, from the database.",
        options: [
          { id: "1", answer: "DELETE TABLE" },
          { id: "2", answer: "REMOVE TABLE" },
          { id: "3", answer: "TRUNCATE TABLE" },
          { id: "4", answer: "DROP TABLE" },
        ],
        correctAnswer: [{ id: "4", answer: "DROP TABLE" }],
      },
      {
        id: "13",
        question: "What is a `PRIMARY KEY` in SQL?",
        description:
          "A `PRIMARY KEY` is a field (or combination of fields) that uniquely identifies each record in a table. It must contain unique values and cannot contain NULL values.",
        options: [
          { id: "1", answer: "A key used for encryption." },
          { id: "2", answer: "A field that can contain duplicate values." },
          {
            id: "3",
            answer: "A field that uniquely identifies each record in a table.",
          },
          { id: "4", answer: "A key used to sort records." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "A field that uniquely identifies each record in a table.",
          },
        ],
      },
      {
        id: "14",
        question: "What is a `FOREIGN KEY` in SQL?",
        description:
          "A `FOREIGN KEY` is a field (or collection of fields) in one table that refers to the `PRIMARY KEY` in another table. It establishes a link between two tables, ensuring referential integrity.",
        options: [
          { id: "1", answer: "A key used for sorting data." },
          {
            id: "2",
            answer:
              "A key that identifies a unique record in a different table.",
          },
          { id: "3", answer: "A key that encrypts data." },
          { id: "4", answer: "A key used for searching specific values." },
        ],
        correctAnswer: [
          {
            id: "2",
            answer:
              "A key that identifies a unique record in a different table.",
          },
        ],
      },
      {
        id: "15",
        question:
          "Which clause is used to group rows that have the same values into summary rows?",
        description:
          "The `GROUP BY` clause is used with aggregate functions (like `COUNT`, `MAX`, `MIN`, `SUM`, `AVG`) to group the result-set by one or more columns.",
        options: [
          { id: "1", answer: "ORDER BY" },
          { id: "2", answer: "ARRANGE BY" },
          { id: "3", answer: "GROUP BY" },
          { id: "4", answer: "CLUSTER BY" },
        ],
        correctAnswer: [{ id: "3", answer: "GROUP BY" }],
      },
      {
        id: "16",
        question:
          "Which aggregate function counts the number of rows in a set?",
        description:
          "The `COUNT()` function returns the number of rows that matches a specified criterion.",
        options: [
          { id: "1", answer: "SUM()" },
          { id: "2", answer: "TOTAL()" },
          { id: "3", answer: "NUMBER()" },
          { id: "4", answer: "COUNT()" },
        ],
        correctAnswer: [{ id: "4", answer: "COUNT()" }],
      },
      {
        id: "17",
        question:
          "Which aggregate function calculates the average value of a numeric column?",
        description:
          "The `AVG()` function calculates the average value of a numeric column.",
        options: [
          { id: "1", answer: "AVERAGE()" },
          { id: "2", answer: "MEAN()" },
          { id: "3", answer: "AVG()" },
          { id: "4", answer: "SUM()/COUNT()" },
        ],
        correctAnswer: [{ id: "3", answer: "AVG()" }],
      },
      {
        id: "18",
        question: "Which operator tests for the presence of a value in a list?",
        description:
          "The `IN` operator allows you to specify multiple values in a `WHERE` clause. It returns true if an operand is equal to one of a list of expressions.",
        options: [
          { id: "1", answer: "WITHIN" },
          { id: "2", answer: "CONTAINS" },
          { id: "3", answer: "EXIST" },
          { id: "4", answer: "IN" },
        ],
        correctAnswer: [{ id: "4", answer: "IN" }],
      },
      {
        id: "19",
        question:
          "Which operator returns true if a value is NOT within a range or set?",
        description:
          "The `NOT IN` operator is used to retrieve rows where a column's value does not match any value in a list.",
        options: [
          { id: "1", answer: "OUT" },
          { id: "2", answer: "NOT EXIST" },
          { id: "3", answer: "NOT IN" },
          { id: "4", answer: "EXCEPT" },
        ],
        correctAnswer: [{ id: "3", answer: "NOT IN" }],
      },
      {
        id: "20",
        question:
          "What is the wildcard character that matches any sequence of zero or more characters in SQL `LIKE` operator?",
        description:
          "The `%` wildcard character matches any sequence of zero or more characters. It's often used with the `LIKE` operator.",
        options: [
          { id: "1", answer: "?" },
          { id: "2", answer: "*" },
          { id: "3", answer: "#" },
          { id: "4", answer: "%" },
        ],
        correctAnswer: [{ id: "4", answer: "%" }],
      },
      {
        id: "21",
        question:
          "What is the wildcard character that matches any single character in SQL `LIKE` operator?",
        description:
          "The `_` (underscore) wildcard character matches any single character. It's often used with the `LIKE` operator.",
        options: [
          { id: "1", answer: "*" },
          { id: "2", answer: "?" },
          { id: "3", answer: "-" },
          { id: "4", answer: "_" },
        ],
        correctAnswer: [{ id: "4", answer: "_" }],
      },
      {
        id: "22",
        question:
          "Which SQL command is used to add, delete, or modify columns in an existing table?",
        description:
          "The `ALTER TABLE` statement is used to add, delete, or modify columns in an existing table, or to add/drop constraints.",
        options: [
          { id: "1", answer: "MODIFY TABLE" },
          { id: "2", answer: "CHANGE TABLE" },
          { id: "3", answer: "ALTER TABLE" },
          { id: "4", answer: "UPDATE TABLE" },
        ],
        correctAnswer: [{ id: "3", answer: "ALTER TABLE" }],
      },
      {
        id: "23",
        question:
          "Which SQL keyword is used to retrieve the minimum value of a column?",
        description:
          "The `MIN()` aggregate function returns the smallest value of the selected column.",
        options: [
          { id: "1", answer: "LEAST()" },
          { id: "2", answer: "SMALLEST()" },
          { id: "3", answer: "MIN()" },
          { id: "4", answer: "LOWER()" },
        ],
        correctAnswer: [{ id: "3", answer: "MIN()" }],
      },
      {
        id: "24",
        question:
          "Which SQL keyword is used to retrieve the maximum value of a column?",
        description:
          "The `MAX()` aggregate function returns the largest value of the selected column.",
        options: [
          { id: "1", answer: "GREATEST()" },
          { id: "2", answer: "TOP()" },
          { id: "3", answer: "MAX()" },
          { id: "4", answer: "UPPER()" },
        ],
        correctAnswer: [{ id: "3", answer: "MAX()" }],
      },
      {
        id: "25",
        question: "What is `NULL` in SQL?",
        description:
          "`NULL` is a marker that indicates that a data value does not exist in the database. It is not the same as zero or an empty string.",
        options: [
          { id: "1", answer: "The value zero." },
          { id: "2", answer: "An empty string." },
          { id: "3", answer: "A missing or unknown data value." },
          { id: "4", answer: "An error message." },
        ],
        correctAnswer: [
          { id: "3", answer: "A missing or unknown data value." },
        ],
      },
      {
        id: "26",
        question: "Which operator is used to test for `NULL` values?",
        description:
          "You cannot use `=` or `!=` to test for `NULL` values. Instead, you must use `IS NULL` or `IS NOT NULL`.",
        options: [
          { id: "1", answer: " = NULL" },
          { id: "2", answer: " IS EMPTY" },
          { id: "3", answer: " IS NULL" },
          { id: "4", answer: " LIKE NULL" },
        ],
        correctAnswer: [{ id: "3", answer: " IS NULL" }],
      },
      {
        id: "27",
        question: "Which SQL command is used to change the name of a table?",
        description:
          "The `ALTER TABLE ... RENAME TO` (or `RENAME TABLE` in some systems) command is used to rename an existing table.",
        options: [
          { id: "1", answer: "CHANGE TABLE" },
          { id: "2", answer: "MODIFY TABLE" },
          { id: "3", answer: "RENAME TABLE" },
          { id: "4", answer: "UPDATE TABLE NAME" },
        ],
        correctAnswer: [{ id: "3", answer: "RENAME TABLE" }],
      },
      {
        id: "28",
        question:
          "Which SQL join returns only the rows where there is a match in both tables?",
        description:
          "An `INNER JOIN` (or simply `JOIN`) returns records that have matching values in both tables.",
        options: [
          { id: "1", answer: "LEFT JOIN" },
          { id: "2", answer: "RIGHT JOIN" },
          { id: "3", answer: "FULL JOIN" },
          { id: "4", answer: "INNER JOIN" },
        ],
        correctAnswer: [{ id: "4", answer: "INNER JOIN" }],
      },
      {
        id: "29",
        question:
          "Which SQL join returns all rows from the left table, and the matching rows from the right table?",
        description:
          "A `LEFT JOIN` (or `LEFT OUTER JOIN`) returns all records from the left table, and the matching records from the right table. If there is no match, the result is NULL from the right side.",
        options: [
          { id: "1", answer: "RIGHT JOIN" },
          { id: "2", answer: "INNER JOIN" },
          { id: "3", answer: "LEFT JOIN" },
          { id: "4", answer: "FULL JOIN" },
        ],
        correctAnswer: [{ id: "3", answer: "LEFT JOIN" }],
      },
      {
        id: "30",
        question: "What is the purpose of the `AS` keyword in SQL?",
        description:
          "The `AS` keyword is used to assign a temporary alias (a new name) to a column or a table in a query. This alias only exists for the duration of the query.",
        options: [
          { id: "1", answer: "To define a new data type." },
          { id: "2", answer: "To perform a calculation." },
          {
            id: "3",
            answer:
              "To assign a temporary alias (rename) to a column or table.",
          },
          { id: "4", answer: "To specify a condition." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To assign a temporary alias (rename) to a column or table.",
          },
        ],
      },
      {
        id: "31",
        question:
          "What is the correct way to select all columns from a table named 'Customers'?",
        description:
          "The `*` (asterisk) is a wildcard character used to select all columns from a table.",
        options: [
          { id: "1", answer: "SELECT (ALL) FROM Customers;" },
          { id: "2", answer: "SELECT *.Customers;" },
          { id: "3", answer: "SELECT ALL FROM Customers;" },
          { id: "4", answer: "SELECT * FROM Customers;" },
        ],
        correctAnswer: [{ id: "4", answer: "SELECT * FROM Customers;" }],
      },
      {
        id: "32",
        question:
          "Which clause is used to filter results based on aggregate functions?",
        description:
          "The `HAVING` clause is used with the `GROUP BY` clause to filter groups based on conditions applied to aggregate functions, where the `WHERE` clause cannot be used.",
        options: [
          { id: "1", answer: "WHERE" },
          { id: "2", answer: "FILTER BY" },
          { id: "3", answer: "GROUP BY" },
          { id: "4", answer: "HAVING" },
        ],
        correctAnswer: [{ id: "4", answer: "HAVING" }],
      },
      {
        id: "33",
        question: "Which of the following data types stores whole numbers?",
        description:
          "`INT` (or `INTEGER`) is a common SQL data type for storing whole numbers.",
        options: [
          { id: "1", answer: "VARCHAR" },
          { id: "2", answer: "DECIMAL" },
          { id: "3", answer: "BOOLEAN" },
          { id: "4", answer: "INT" },
        ],
        correctAnswer: [{ id: "4", answer: "INT" }],
      },
      {
        id: "34",
        question:
          "Which of the following data types stores variable-length strings?",
        description:
          "`VARCHAR` is used to store variable-length strings of characters. The length specifies the maximum number of characters.",
        options: [
          { id: "1", answer: "CHAR" },
          { id: "2", answer: "TEXT" },
          { id: "3", answer: "INT" },
          { id: "4", answer: "VARCHAR" },
        ],
        correctAnswer: [{ id: "4", answer: "VARCHAR" }],
      },
      {
        id: "35",
        question: "What is the purpose of `TRUNCATE TABLE`?",
        description:
          "`TRUNCATE TABLE` removes all rows from a table, but keeps the table structure and its columns, indexes, and constraints intact. It is usually faster than `DELETE` without a `WHERE` clause and resets auto-incrementing counters.",
        options: [
          { id: "1", answer: "To delete specific rows from a table." },
          { id: "2", answer: "To delete the entire table structure." },
          {
            id: "3",
            answer:
              "To remove all rows from a table, but keep the table structure.",
          },
          { id: "4", answer: "To rename a table." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "To remove all rows from a table, but keep the table structure.",
          },
        ],
      },
      {
        id: "36",
        question:
          "Which SQL constraint ensures that all values in a column are different?",
        description:
          "The `UNIQUE` constraint ensures that all values in a column are different. It is similar to `PRIMARY KEY` but a table can have multiple `UNIQUE` constraints.",
        options: [
          { id: "1", answer: "NOT NULL" },
          { id: "2", answer: "PRIMARY KEY" },
          { id: "3", answer: "CHECK" },
          { id: "4", answer: "UNIQUE" },
        ],
        correctAnswer: [{ id: "4", answer: "UNIQUE" }],
      },
      {
        id: "37",
        question:
          "Which SQL constraint ensures that a column cannot have `NULL` values?",
        description:
          "The `NOT NULL` constraint ensures that a column cannot store `NULL` values, meaning it must always contain a value.",
        options: [
          { id: "1", answer: "EMPTY" },
          { id: "2", answer: "ZERO" },
          { id: "3", answer: "NOT NULL" },
          { id: "4", answer: "REQUIRED" },
        ],
        correctAnswer: [{ id: "3", answer: "NOT NULL" }],
      },
      {
        id: "38",
        question:
          "Which SQL operator combines two or more conditions where all conditions must be true?",
        description:
          "The `AND` operator is a logical operator that displays a record if all the conditions separated by `AND` are TRUE.",
        options: [
          { id: "1", answer: "OR" },
          { id: "2", answer: "NOT" },
          { id: "3", answer: "BOTH" },
          { id: "4", answer: "AND" },
        ],
        correctAnswer: [{ id: "4", answer: "AND" }],
      },
      {
        id: "39",
        question:
          "Which SQL operator combines two or more conditions where at least one condition must be true?",
        description:
          "The `OR` operator is a logical operator that displays a record if any of the conditions separated by `OR` is TRUE.",
        options: [
          { id: "1", answer: "AND" },
          { id: "2", answer: "EITHER" },
          { id: "3", answer: "ANY" },
          { id: "4", answer: "OR" },
        ],
        correctAnswer: [{ id: "4", answer: "OR" }],
      },
      {
        id: "40",
        question: "What is a 'database schema'?",
        description:
          "A database schema is the logical design and structure of a database, including tables, views, indexes, relationships, and constraints.",
        options: [
          { id: "1", answer: "A software used to create databases." },
          { id: "2", answer: "The data stored in a database." },
          {
            id: "3",
            answer: "The logical structure and organization of a database.",
          },
          { id: "4", answer: "A backup of a database." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer: "The logical structure and organization of a database.",
          },
        ],
      },
      {
        id: "41",
        question: "Which command is used to add new rows to a table?",
        description:
          "The `INSERT INTO` statement is specifically used to add new rows (records) into a table.",
        options: [
          { id: "1", answer: "UPDATE" },
          { id: "2", answer: "ADD RECORD" },
          { id: "3", answer: "INSERT INTO" },
          { id: "4", answer: "ALTER TABLE" },
        ],
        correctAnswer: [{ id: "3", answer: "INSERT INTO" }],
      },
      {
        id: "42",
        question: "What does DDL stand for?",
        description:
          "DDL stands for Data Definition Language. It comprises SQL commands used to define, modify, or delete database structures.",
        options: [
          { id: "1", answer: "Data Description Logic" },
          { id: "2", answer: "Database Definition Language" },
          { id: "3", answer: "Data Definition Language" },
          { id: "4", answer: "Dynamic Data Link" },
        ],
        correctAnswer: [{ id: "3", answer: "Data Definition Language" }],
      },
      {
        id: "43",
        question: "What does DML stand for?",
        description:
          "DML stands for Data Manipulation Language. It comprises SQL commands used for retrieving, inserting, deleting, and updating data in a database.",
        options: [
          { id: "1", answer: "Database Management Logic" },
          { id: "2", answer: "Data Modeling Language" },
          { id: "3", answer: "Data Manipulation Language" },
          { id: "4", answer: "Dynamic Management Language" },
        ],
        correctAnswer: [{ id: "3", answer: "Data Manipulation Language" }],
      },
      {
        id: "44",
        question: "Which of the following is a DDL command?",
        description:
          "`ALTER TABLE` is used to modify the structure of a table, making it a DDL command. `SELECT`, `DELETE`, and `INSERT` are DML commands.",
        options: [
          { id: "1", answer: "SELECT" },
          { id: "2", answer: "DELETE" },
          { id: "3", answer: "INSERT" },
          { id: "4", answer: "ALTER TABLE" },
        ],
        correctAnswer: [{ id: "4", answer: "ALTER TABLE" }],
      },
      {
        id: "45",
        question:
          "Which SQL statement is used to remove a database from the server?",
        description:
          "The `DROP DATABASE` statement is used to delete an entire database from a database server.",
        options: [
          { id: "1", answer: "DELETE DATABASE" },
          { id: "2", answer: "REMOVE DATABASE" },
          { id: "3", answer: "ERASE DATABASE" },
          { id: "4", answer: "DROP DATABASE" },
        ],
        correctAnswer: [{ id: "4", answer: "DROP DATABASE" }],
      },
      {
        id: "46",
        question: "What is a 'relational database'?",
        description:
          "A relational database organizes data into one or more tables (or 'relations') of rows and columns. It uses SQL for data manipulation and querying.",
        options: [
          { id: "1", answer: "A database that stores data in documents." },
          {
            id: "2",
            answer: "A database that stores data in key-value pairs.",
          },
          {
            id: "3",
            answer:
              "A database that stores and provides access to data points that are related to one another.",
          },
          { id: "4", answer: "A database that stores data in a graph format." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "A database that stores and provides access to data points that are related to one another.",
          },
        ],
      },
      {
        id: "47",
        question: "What does a `JOIN` clause do in SQL?",
        description:
          "A `JOIN` clause is used to combine rows from two or more tables based on a related column between them. It is essential for querying data that is spread across multiple tables in a relational database.",
        options: [
          { id: "1", answer: "Deletes records from multiple tables." },
          { id: "2", answer: "Modifies data in multiple tables." },
          {
            id: "3",
            answer:
              "Combines rows from two or more tables based on a related column.",
          },
          { id: "4", answer: "Creates new tables." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Combines rows from two or more tables based on a related column.",
          },
        ],
      },
      {
        id: "48",
        question: "What is the `COUNT(*)` function typically used for?",
        description:
          "`COUNT(*)` counts the total number of rows in a table or a group, including rows with NULL values.",
        options: [
          {
            id: "1",
            answer: "Counts only non-null values in a specific column.",
          },
          {
            id: "2",
            answer: "Counts the number of distinct values in a column.",
          },
          {
            id: "3",
            answer:
              "Counts the total number of rows in the result set, including nulls.",
          },
          { id: "4", answer: "Calculates the sum of all values." },
        ],
        correctAnswer: [
          {
            id: "3",
            answer:
              "Counts the total number of rows in the result set, including nulls.",
          },
        ],
      },
      {
        id: "49",
        question:
          "Which operator selects values within a given range, inclusive?",
        description:
          "The `BETWEEN` operator selects values within a given range. The values can be numbers, text, or dates. The range is inclusive.",
        options: [
          { id: "1", answer: "IN RANGE" },
          { id: "2", answer: "INSIDE" },
          { id: "3", answer: "BETWEEN" },
          { id: "4", answer: "RANGE" },
        ],
        correctAnswer: [{ id: "3", answer: "BETWEEN" }],
      },
      {
        id: "50",
        question:
          "Which command is used to retrieve data from multiple tables by matching rows based on a related column?",
        description:
          "The `JOIN` clause (specifically `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`) is used to combine rows from two or more tables based on a related column between them.",
        options: [
          { id: "1", answer: "UNION" },
          { id: "2", answer: "SELECT FROM" },
          { id: "3", answer: "MERGE" },
          { id: "4", answer: "JOIN" },
        ],
        correctAnswer: [{ id: "4", answer: "JOIN" }],
      },
    ],
  },
];
