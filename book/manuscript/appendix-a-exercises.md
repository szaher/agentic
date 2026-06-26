
# Appendix A: Exercises

Review questions organized by chapter. Try answering before checking the answers.

### Chapter 1: Foundations of LLM Agents — Why Agents Matter

**Q1.** What is a key limitation of static LLM calls that agents address?
  a) Static LLM calls are too slow to generate useful responses
  b) Static LLM calls cannot take actions, adapt to feedback, or pursue multi-step goals
  c) Static LLM calls cannot generate text longer than 100 words
  d) Static LLM calls require a GPU to run

**Q2.** Which analogy best describes the difference between a static LLM call and an LLM agent?
  a) A calculator vs. a spreadsheet
  b) A bicycle vs. a car
  c) An employee who answers one question vs. one who owns a project end-to-end
  d) A phone call vs. a text message

**Q3.** What does the term 'agentic system' generally imply?
  a) A system that only generates text faster
  b) A system that uses multiple GPUs for training
  c) A system that can autonomously perceive, reason, plan, and act to achieve goals
  d) A system that replaces human developers entirely

**Q4.** Which of the following is NOT a characteristic of the shift from static LLM usage to agentic systems?
  a) Adding tool use so the model can take real-world actions
  b) Introducing memory so the model can learn from past interactions
  c) Removing the language model entirely and using rule-based logic
  d) Enabling multi-step reasoning with planning and self-correction
**Answers:** Q1: b) Static LLM calls cannot take actions, adapt to feedback, or pursue multi-step goals
Q2: c) An employee who answers one question vs. one who owns a project end-to-end
Q3: c) A system that can autonomously perceive, reason, plan, and act to achieve goals
Q4: c) Removing the language model entirely and using rule-based logic

### Chapter 1: Foundations of LLM Agents — What Is an Agent?

**Q1.** Which of the following best describes an agent in the context of AI?
  a) A program that executes a fixed sequence of instructions without variation
  b) An entity that perceives its environment and takes actions to achieve goals
  c) Any software system that uses a large language model for text generation
  d) A chatbot that responds to user messages in a conversational format

**Q2.** What distinguishes an LLM agent from a traditional rule-based software agent?
  a) LLM agents do not interact with external environments
  b) Rule-based agents can handle novel situations more flexibly
  c) LLM agents use natural language understanding to reason about and adapt to novel situations
  d) Traditional rule-based agents are always more accurate than LLM agents

**Q3.** In the agent loop, what happens immediately after the agent perceives new information from its environment?
  a) The agent takes an action to modify the environment
  b) The agent reasons about the information and decides on a course of action
  c) The agent terminates and returns a final result
  d) The agent resets its internal state to default values

**Q4.** A thermostat that reads the current temperature and turns on the heater when it drops below a set point is an example of which type of agent?
  a) A goal-based agent with complex planning capabilities
  b) A simple reflex agent that maps percepts directly to actions
  c) A learning agent that improves its behavior over time
  d) A utility-based agent that maximizes a performance metric
**Answers:** Q1: b) An entity that perceives its environment and takes actions to achieve goals
Q2: c) LLM agents use natural language understanding to reason about and adapt to novel situations
Q3: b) The agent reasons about the information and decides on a course of action
Q4: b) A simple reflex agent that maps percepts directly to actions

### Chapter 1: Foundations of LLM Agents — LLM Capabilities That Enable Agents

**Q1.** Which LLM capability allows a model to adapt its behavior based on examples provided in the prompt, without updating its weights?
  a) Instruction following
  b) In-context learning
  c) Chain-of-thought reasoning
  d) Reinforcement learning from human feedback

**Q2.** What is the primary purpose of structured output and function calling in agent systems?
  a) To make the model's responses easier for humans to read
  b) To reduce the number of tokens the model generates
  c) To produce machine-parseable responses that external tools and systems can act on
  d) To improve the model's internal training accuracy

**Q3.** Chain-of-thought prompting improves agent performance primarily because it:
  a) Forces the model to break complex problems into intermediate reasoning steps before answering
  b) Reduces the total number of API calls needed
  c) Eliminates the need for tool use entirely

**Q4.** Which combination of LLM capabilities is MOST essential for an autonomous agent?
  a) Text summarization, translation, and sentiment analysis
  b) Code generation and autocomplete
  c) Instruction following, reasoning, and tool use working together
  d) Named entity recognition and text classification
**Answers:** Q1: b) In-context learning
Q2: c) To produce machine-parseable responses that external tools and systems can act on
Q3: a) Forces the model to break complex problems into intermediate reasoning steps before answering
Q4: c) Instruction following, reasoning, and tool use working together

### Chapter 1: Foundations of LLM Agents — The Agent Loop

**Q1.** What are the three phases of the core agent loop, in order?
  a) Plan, Execute, Evaluate
  b) Observe, Think, Act
  c) Prompt, Generate, Parse
  d) Input, Process, Output

**Q2.** Which of the following is NOT a typical termination condition for an agent loop?
  a) The agent produces a final answer for the user
  b) The agent reaches a maximum iteration limit
  c) The LLM returns a response containing text
  d) The agent encounters an unrecoverable error

**Q3.** In a multi-turn agent loop, what happens to a tool's output after it executes?
  a) It is discarded after the agent reads it
  b) It is returned directly to the user
  c) It is fed back into the LLM as a new observation for the next think step
  d) It replaces the original user prompt

**Q4.** What distinguishes a multi-turn agent loop from a single-turn LLM call?
  a) Multi-turn loops use larger models
  b) Single-turn calls cannot use system prompts
  c) Multi-turn loops iterate through observe-think-act cycles until a goal is met
  d) Multi-turn loops always require human approval at each step
**Answers:** Q1: b) Observe, Think, Act
Q2: c) The LLM returns a response containing text
Q3: c) It is fed back into the LLM as a new observation for the next think step
Q4: c) Multi-turn loops iterate through observe-think-act cycles until a goal is met

### Chapter 1: Foundations of LLM Agents — The Agent Ecosystem

**Q1.** Which layer of the agent ecosystem is responsible for providing the core language understanding and generation capabilities?
  a) Agent frameworks
  b) Protocols and standards
  c) LLM providers and foundation models
  d) Observability platforms

**Q2.** What is the primary purpose of the Model Context Protocol (MCP)?
  a) To let agents communicate with other agents
  b) To provide a standard interface for connecting LLMs to external tools and data sources
  c) To benchmark agent performance on coding tasks
  d) To deploy agents to production environments

**Q3.** Which of the following is an agent-to-agent communication protocol designed for multi-agent interoperability?
  a) A2A (Agent-to-Agent)
  b) MCP (Model Context Protocol)
  c) SWE-Bench
  d) RAG (Retrieval-Augmented Generation)

**Q4.** Why do agent developers typically use frameworks rather than building everything from raw LLM API calls?
  a) Raw API calls are not available to developers
  b) Frameworks are the only way to access LLM providers
  c) Frameworks handle common patterns like tool orchestration, memory, and state management
  d) Frameworks always produce better results than custom code
**Answers:** Q1: c) LLM providers and foundation models
Q2: b) To provide a standard interface for connecting LLMs to external tools and data sources
Q3: a) A2A (Agent-to-Agent)
Q4: c) Frameworks handle common patterns like tool orchestration, memory, and state management

### Chapter 1: Foundations of LLM Agents — When to Use Agents

**Q1.** A user wants to translate a paragraph from English to French. Which approach is most appropriate?
  a) A multi-agent system with a translator agent and a reviewer agent
  b) A single LLM call with a translation prompt
  c) A ReAct agent with a dictionary tool
  d) A prompt chain with three sequential LLM calls

**Q2.** Which of the following is a genuine risk of using an agent when a simpler approach would suffice?
  a) The agent will always produce lower-quality output than a single prompt
  b) Agents cannot use tools, so they are limited to text generation
  c) Agents add latency, cost, and unpredictability that may not be justified for simple tasks
  d) Agents require multi-GPU clusters to run

**Q3.** What is the FIRST question to ask in the agent decision framework?
  a) How many tools does the task require?
  b) Can this task be solved with a single, well-crafted prompt?
  c) Which agent framework should I use?
  d) Does the task require multiple agents?

**Q4.** Which scenario is the BEST fit for an agentic approach?
  a) Generating a product description from a list of features
  b) Summarizing a single document into three bullet points
  c) Investigating a production outage by querying logs, checking metrics, testing hypotheses, and proposing a fix
  d) Converting a JSON payload to YAML format
**Answers:** Q1: b) A single LLM call with a translation prompt
Q2: c) Agents add latency, cost, and unpredictability that may not be justified for simple tasks
Q3: b) Can this task be solved with a single, well-crafted prompt?
Q4: c) Investigating a production outage by querying logs, checking metrics, testing hypotheses, and proposing a fix

### Chapter 2: Prompting & Reasoning — Prompt Engineering for Agents

**Q1.** What is the primary reason agent prompts are more complex than chatbot prompts?
  a) Agents require longer prompts to produce better answers
  b) Agents must handle tool selection, multi-turn state, output format constraints, and error recovery within a single prompt
  c) Agents use a different language model than chatbots
  d) Agents always need few-shot examples to work correctly

**Q2.** Which section of an agent prompt defines WHAT the agent can do and HOW it should use external capabilities?
  a) Role definition
  b) Behavioral guidelines
  c) Tool instructions
  d) Output format specification

**Q3.** Why should an agent prompt include explicit failure-handling instructions?
  a) To prevent the model from generating any text when a tool fails
  b) To reduce the number of API calls the agent makes
  c) Because agents operate in loops where errors compound -- an unhandled failure in one step can derail the entire chain of subsequent actions
  d) Because LLMs cannot handle errors without explicit instructions

**Q4.** Which of the following is a key difference between a chatbot system prompt and an agent system prompt?
  a) Chatbot prompts are written in natural language while agent prompts use code
  b) Agent prompts must define when to stop acting, while chatbot prompts do not need a stopping condition
  c) Chatbot prompts always use structured output formats
  d) Agent prompts never include personality or tone instructions
**Answers:** Q1: b) Agents must handle tool selection, multi-turn state, output format constraints, and error recovery within a single prompt
Q2: c) Tool instructions
Q3: c) Because agents operate in loops where errors compound -- an unhandled failure in one step can derail the entire chain of subsequent actions
Q4: b) Agent prompts must define when to stop acting, while chatbot prompts do not need a stopping condition

### Chapter 2: Prompting & Reasoning — Chain-of-Thought Reasoning

**Q1.** What is the key difference between few-shot CoT and zero-shot CoT prompting?
  a) Few-shot CoT uses larger models while zero-shot CoT works with any model
  b) Few-shot CoT includes worked reasoning examples in the prompt while zero-shot CoT uses a trigger phrase like 'Let's think step by step'
  c) Zero-shot CoT is more accurate than few-shot CoT in all cases
  d) Few-shot CoT does not produce intermediate reasoning steps

**Q2.** Why does Chain-of-Thought prompting improve accuracy on complex tasks?
  a) It forces the model to use more compute by generating longer outputs
  b) It changes the model's weights to specialize in reasoning
  c) It breaks the problem into intermediate steps, reducing compounding errors and making reasoning inspectable
  d) It automatically retries the prompt if the first answer is wrong

**Q3.** In self-consistency prompting, how is the final answer determined?
  a) The longest reasoning chain is selected as the answer
  b) The model samples multiple reasoning paths and takes the majority vote across their final answers
  c) The user manually picks the best reasoning path
  d) The first generated answer is always used

**Q4.** How does Chain-of-Thought reasoning connect to the agent loop covered in Module 1?
  a) CoT replaces the agent loop entirely
  b) CoT is only used during the Act phase of the loop
  c) CoT powers the Think step of the observe-think-act cycle, letting the agent reason before choosing an action
  d) CoT is unrelated to agent architectures
**Answers:** Q1: b) Few-shot CoT includes worked reasoning examples in the prompt while zero-shot CoT uses a trigger phrase like 'Let's think step by step'
Q2: c) It breaks the problem into intermediate steps, reducing compounding errors and making reasoning inspectable
Q3: b) The model samples multiple reasoning paths and takes the majority vote across their final answers
Q4: c) CoT powers the Think step of the observe-think-act cycle, letting the agent reason before choosing an action

### Chapter 2: Prompting & Reasoning — Structured Outputs

**Q1.** Why are structured outputs critical for LLM-based agents?
  a) They make responses shorter and cheaper
  b) They allow downstream code to reliably parse and act on the model's decisions
  c) They improve the model's internal reasoning accuracy
  d) They eliminate the need for system prompts

**Q2.** What is the main advantage of constrained decoding (e.g., tool_use with an input_schema) over prompt-based JSON?
  a) It runs faster because the model generates fewer tokens
  b) It removes the need for any prompt engineering
  c) It works without defining a schema in advance
  d) It guarantees the output conforms to a schema, eliminating parse failures

**Q3.** Which failure mode is MOST likely when using prompt-based JSON without schema enforcement?
  a) The model produces valid JSON but with hallucinated or missing fields
  b) The model refuses to generate any output
  c) The model generates binary data instead of text
  d) The API returns an authentication error

**Q4.** In the Anthropic tool_use API, where does the structured output schema get defined?
  a) In the system prompt as a natural language description
  b) In a separate configuration file uploaded to the model
  c) In the input_schema field of a tool definition passed to the API
  d) In the user message as a JSON example
**Answers:** Q1: b) They allow downstream code to reliably parse and act on the model's decisions
Q2: d) It guarantees the output conforms to a schema, eliminating parse failures
Q3: a) The model produces valid JSON but with hallucinated or missing fields
Q4: c) In the input_schema field of a tool definition passed to the API

### Chapter 2: Prompting & Reasoning — System Prompt Design

**Q1.** Which section of a system prompt is most important for preventing an agent from performing actions outside its intended scope?
  a) Identity and role
  b) Capabilities and constraints
  c) Output format
  d) Few-shot examples

**Q2.** What is the main risk of including too many rules and instructions in a single system prompt?
  a) The API will reject the request due to token limits
  b) The model may ignore or contradict rules as the prompt grows longer
  c) The model will always refuse to answer
  d) The system prompt will override the user's message entirely

**Q3.** Why should system prompts include few-shot examples of desired behavior?
  a) To increase the token count and improve model performance
  b) Because models cannot follow instructions without examples
  c) They demonstrate the expected format and reasoning pattern more reliably than abstract rules alone
  d) They replace the need for behavioral guidelines

**Q4.** When building a multi-agent system, what is the recommended approach to system prompts?
  a) Use a single shared system prompt for all agents
  b) Give each agent its own specialized system prompt tailored to its role
  c) Avoid system prompts entirely and rely on user messages
  d) Copy the same prompt but change the agent's name
**Answers:** Q1: b) Capabilities and constraints
Q2: b) The model may ignore or contradict rules as the prompt grows longer
Q3: c) They demonstrate the expected format and reasoning pattern more reliably than abstract rules alone
Q4: b) Give each agent its own specialized system prompt tailored to its role

### Chapter 2: Prompting & Reasoning — Reasoning Models and Extended Thinking

**Q1.** What is the key difference between a standard LLM using Chain-of-Thought prompting and a reasoning model like o1 or o3?
  a) Reasoning models are always faster than standard models with CoT prompts
  b) Standard models with CoT produce reasoning in the visible output, while reasoning models perform internal chain-of-thought before generating the response
  c) Reasoning models cannot perform multi-step reasoning
  d) Standard models with CoT use more tokens than reasoning models

**Q2.** When using Claude's extended thinking, what does the budget_tokens parameter control?
  a) The total number of tokens in the final response
  b) The cost limit in dollars for the API call
  c) The maximum number of tokens the model can use for its internal reasoning before responding
  d) The number of tokens reserved for the system prompt

**Q3.** In which scenario would a standard model with a CoT prompt likely be a better choice than a reasoning model?
  a) Solving a multi-step math proof that requires careful logical deduction
  b) A high-volume classification task where each request is straightforward and latency matters
  c) Planning a complex multi-agent workflow with many dependencies
  d) Debugging a subtle concurrency issue in a distributed system

**Q4.** Why might adding explicit Chain-of-Thought instructions to a prompt for a reasoning model actually hurt performance?
  a) Reasoning models do not understand natural language instructions
  b) The model's internal reasoning process may conflict with the forced external reasoning format, leading to redundant or confused output
  c) CoT prompts are incompatible with the API format used by reasoning models
  d) Reasoning models always ignore the system prompt entirely
**Answers:** Q1: b) Standard models with CoT produce reasoning in the visible output, while reasoning models perform internal chain-of-thought before generating the response
Q2: c) The maximum number of tokens the model can use for its internal reasoning before responding
Q3: b) A high-volume classification task where each request is straightforward and latency matters
Q4: b) The model's internal reasoning process may conflict with the forced external reasoning format, leading to redundant or confused output

### Chapter 3: Tool Use & Function Calling — Why Tools Matter

**Q1.** Why couldn't the fact-checker agent from Module 2 verify claims, despite having strong reasoning abilities?
  a) Its system prompt was poorly designed
  b) It lacked access to tools that could retrieve external information
  c) The model was too small to handle fact-checking tasks
  d) It did not use Chain-of-Thought reasoning

**Q2.** What is the correct relationship between an LLM and the tools it uses?
  a) The LLM directly executes tool code inside its inference process
  b) The LLM sends raw API requests to external services on its own
  c) The LLM generates a structured tool request, and the host application executes it
  d) The tools run autonomously and feed results back to the LLM without any request

**Q3.** Which category of tools introduces permanent changes to external systems?
  a) Information retrieval tools
  b) Computation tools
  c) Side-effect tools
  d) Formatting tools

**Q4.** What is the primary benefit of giving an LLM access to tools?
  a) It makes the model's internal knowledge more accurate
  b) It transforms the model from a knowledge engine into an agent that can act on the world
  c) It reduces the cost of API calls by caching responses
  d) It eliminates the need for prompt engineering
**Answers:** Q1: b) It lacked access to tools that could retrieve external information
Q2: c) The LLM generates a structured tool request, and the host application executes it
Q3: c) Side-effect tools
Q4: b) It transforms the model from a knowledge engine into an agent that can act on the world

### Chapter 3: Tool Use & Function Calling — Function Calling Basics

**Q1.** When the LLM wants to call a tool, what does it return in its response?
  a) A Python function object that your code can invoke directly
  b) A tool_use content block containing the tool name and input arguments
  c) An HTTP request that the SDK sends to an external API automatically
  d) A shell command string that you run with subprocess

**Q2.** Why must each tool_result include a tool_use_id?
  a) It is used as a cache key for deduplicating repeated calls
  b) The API uses it to bill each tool call separately
  c) It lets the LLM match each result back to the specific tool call that requested it
  d) It prevents the same tool from being called more than once per turn

**Q3.** What happens when the LLM returns multiple tool_use blocks in a single response?
  a) Only the first tool_use block is executed; the rest are ignored
  b) The API automatically executes them in sequence and returns combined results
  c) Your code receives all of them and should execute each one, returning a tool_result for every block
  d) It indicates an error because the LLM can only call one tool at a time

**Q4.** Which field in a tool definition has the greatest impact on whether the LLM selects the right tool?
  a) The name field, because the LLM only looks at tool names
  b) The input_schema, because JSON Schema types determine tool selection
  c) The description field, because it tells the LLM what the tool does and when to use it
  d) The required array, because missing parameters cause the LLM to skip the tool
**Answers:** Q1: b) A tool_use content block containing the tool name and input arguments
Q2: c) It lets the LLM match each result back to the specific tool call that requested it
Q3: c) Your code receives all of them and should execute each one, returning a tool_result for every block
Q4: c) The description field, because it tells the LLM what the tool does and when to use it

### Chapter 3: Tool Use & Function Calling — Designing Effective Tool Interfaces

**Q1.** Why should tool descriptions explain WHEN to use the tool, not just what it does?
  a) Because LLMs cannot read the tool name
  b) Because the description is the primary signal the LLM uses to decide whether to select a tool for a given task
  c) Because descriptions are displayed to the end user
  d) Because longer descriptions always improve accuracy

**Q2.** What is the main problem with a tool that accepts 12 optional parameters?
  a) It makes the API slower to execute
  b) It requires more server memory
  c) It increases the chance the LLM will hallucinate parameter values or use the wrong combination
  d) It violates the JSON Schema specification

**Q3.** Which of the following is the best tool name?
  a) handleData
  b) do_thing
  c) search_knowledge_base
  d) util_v2_final

**Q4.** Why is it better to use an enum type instead of a free-text string for a 'priority' parameter?
  a) Enums are faster to parse than strings
  b) Enums use less memory in the JSON payload
  c) Enums constrain the LLM to valid values, eliminating an entire class of errors
  d) Enums are required by the OpenAPI specification
**Answers:** Q1: b) Because the description is the primary signal the LLM uses to decide whether to select a tool for a given task
Q2: c) It increases the chance the LLM will hallucinate parameter values or use the wrong combination
Q3: c) search_knowledge_base
Q4: c) Enums constrain the LLM to valid values, eliminating an entire class of errors

### Chapter 3: Tool Use & Function Calling — Error Handling and Retries

**Q1.** When a tool call fails, what is the recommended way to handle the error in an agent system?
  a) Crash the agent immediately so the user knows something went wrong
  b) Silently ignore the error and continue with the next step
  c) Return a structured error message to the LLM so it can reason about the failure and adapt
  d) Automatically retry the exact same call indefinitely until it succeeds

**Q2.** Why is exponential backoff preferred over fixed-interval retries when handling rate limit errors?
  a) It makes the code more readable
  b) It spaces retries further apart with each attempt, reducing pressure on the overloaded service and improving the chance of success
  c) It always guarantees the retry will succeed on the second attempt
  d) It is required by all API providers and will cause authentication errors otherwise

**Q3.** What is the purpose of setting a maximum retry limit in an agent's tool execution loop?
  a) To reduce the cost of API calls by limiting total usage
  b) To ensure the agent always succeeds within a fixed number of attempts
  c) To prevent infinite loops where the agent repeatedly retries a permanently failing tool
  d) To comply with rate limiting requirements from the LLM provider

**Q4.** In the fallback tool pattern, what happens when a primary tool fails?
  a) The agent tries an alternative tool that can achieve the same goal through a different method
  b) The agent immediately asks the user for help
  c) The agent switches to a different LLM model
  d) The agent clears its context window and starts over
**Answers:** Q1: c) Return a structured error message to the LLM so it can reason about the failure and adapt
Q2: b) It spaces retries further apart with each attempt, reducing pressure on the overloaded service and improving the chance of success
Q3: c) To prevent infinite loops where the agent repeatedly retries a permanently failing tool
Q4: a) The agent tries an alternative tool that can achieve the same goal through a different method

### Chapter 3: Tool Use & Function Calling — Model Context Protocol (MCP)

**Q1.** What problem does MCP primarily solve for the AI tool ecosystem?
  a) It makes LLMs run faster by caching tool results
  b) It provides a single, open standard so tools can be written once and work across any compatible host application
  c) It replaces the need for API keys when connecting to external services
  d) It automatically generates tool implementations from natural language descriptions

**Q2.** In the MCP architecture, what is the role of the MCP Client?
  a) It hosts the user interface and manages multiple client instances
  b) It exposes tools, resources, and prompts to the AI model
  c) It maintains a 1:1 connection with an MCP Server, handling protocol negotiation and message routing
  d) It stores conversation history and context windows

**Q3.** Which of the three MCP primitives represents model-controlled operations that perform actions and have side effects?
  a) Resources
  b) Prompts
  c) Tools
  d) Transports

**Q4.** What happens during the MCP initialization handshake between client and server?
  a) The client sends its API key and the server validates it against a registry
  b) The client and server exchange capabilities, agree on a protocol version, and the client discovers available tools, resources, and prompts
  c) The server pushes all available data to the client in a single batch transfer
  d) The client downloads and installs the server's source code locally
**Answers:** Q1: b) It provides a single, open standard so tools can be written once and work across any compatible host application
Q2: c) It maintains a 1:1 connection with an MCP Server, handling protocol negotiation and message routing
Q3: c) Tools
Q4: b) The client and server exchange capabilities, agree on a protocol version, and the client discovers available tools, resources, and prompts

### Chapter 4: Agent Architectures — The Architecture Landscape

**Q1.** Why did the research agent from Module 3 sometimes go in circles or miss important steps?
  a) The tools it used were poorly designed
  b) The LLM model was too small for research tasks
  c) It lacked a structured architecture to guide its reasoning and actions
  d) It did not have access to enough tools

**Q2.** Which agent architecture separates the planning phase from the execution phase?
  a) Simple loop
  b) ReAct
  c) Reflection
  d) Plan-and-Execute

**Q3.** On the autonomy spectrum, which architecture gives the developer the MOST control over agent behavior?
  a) Simple loop
  b) ReAct
  c) Workflow / State Machine
  d) Plan-and-Execute

**Q4.** What is the primary benefit of the Reflection architecture pattern?
  a) It eliminates the need for tools entirely
  b) It allows the agent to critique and revise its own output before delivering it
  c) It routes requests to different specialized models
  d) It plans all steps upfront before executing any of them
**Answers:** Q1: c) It lacked a structured architecture to guide its reasoning and actions
Q2: d) Plan-and-Execute
Q3: c) Workflow / State Machine
Q4: b) It allows the agent to critique and revise its own output before delivering it

### Chapter 4: Agent Architectures — ReAct: Reasoning + Acting

**Q1.** What is the key innovation of the ReAct pattern compared to a simple tool-calling agent loop?
  a) ReAct uses a different API format for tool calls
  b) ReAct requires the LLM to produce an explicit Thought step with reasoning before each Action
  c) ReAct eliminates the need for tool definitions
  d) ReAct always plans all steps upfront before executing any of them

**Q2.** In a ReAct trace, what does the Observation step represent?
  a) The LLM's internal reasoning about what to do next
  b) The user's original question restated for clarity
  c) The result returned from executing the tool, fed back to the LLM
  d) A summary the LLM writes at the end of the task

**Q3.** Which of the following is a known weakness of the ReAct pattern?
  a) It cannot use tools at all
  b) Its reasoning traces are invisible and cannot be debugged
  c) It reasons one step at a time and can get stuck in repetitive loops without planning ahead
  d) It requires a specialized model that supports ReAct natively

**Q4.** How does ReAct relate to Chain-of-Thought reasoning from Module 2?
  a) ReAct replaces CoT entirely with a different reasoning method
  b) ReAct formalizes CoT into the agent loop by making the model produce a reasoning step before every action
  c) CoT and ReAct are unrelated techniques that solve different problems
  d) ReAct only uses CoT during the final answer, not during tool selection
**Answers:** Q1: b) ReAct requires the LLM to produce an explicit Thought step with reasoning before each Action
Q2: c) The result returned from executing the tool, fed back to the LLM
Q3: c) It reasons one step at a time and can get stuck in repetitive loops without planning ahead
Q4: b) ReAct formalizes CoT into the agent loop by making the model produce a reasoning step before every action

### Chapter 4: Agent Architectures — Plan-and-Execute Agents

**Q1.** What is the key architectural difference between ReAct and Plan-and-Execute agents?
  a) ReAct uses tools while Plan-and-Execute does not
  b) Plan-and-Execute separates planning and execution into distinct phases, while ReAct interleaves them
  c) Plan-and-Execute cannot use tools, only reasoning
  d) ReAct creates a full plan upfront before taking any actions

**Q2.** When should a Plan-and-Execute agent trigger replanning?
  a) After every single step, regardless of outcome
  b) Only when the final step fails
  c) When a step produces unexpected results that invalidate remaining steps in the plan
  d) Replanning should never happen — the original plan must always be followed

**Q3.** Which type of task is Plan-and-Execute LEAST well-suited for?
  a) A research report requiring five sequential data-gathering steps
  b) A simple single-step question like 'What time is it in Tokyo?'
  c) Migrating a database schema across three environments
  d) Coordinating multiple API calls to build a travel itinerary

**Q4.** What role does the executor play in a Plan-and-Execute architecture?
  a) It creates the initial plan and decides the order of steps
  b) It carries out individual steps from the plan using tools and returns results
  c) It only monitors the planner and logs errors
  d) It replaces the planner after the first step is complete
**Answers:** Q1: b) Plan-and-Execute separates planning and execution into distinct phases, while ReAct interleaves them
Q2: c) When a step produces unexpected results that invalidate remaining steps in the plan
Q3: b) A simple single-step question like 'What time is it in Tokyo?'
Q4: b) It carries out individual steps from the plan using tools and returns results

### Chapter 4: Agent Architectures — Self-Reflection and Critique

**Q1.** What is the core addition that self-reflection introduces to the standard agent loop?
  a) A planning step that decomposes the task before execution
  b) A critique step where the agent evaluates its own output and revises before responding
  c) A memory retrieval step that fetches relevant past interactions
  d) A routing step that delegates to specialized sub-agents

**Q2.** When is self-reflection LEAST likely to improve agent performance?
  a) Code generation tasks where the agent can check its own logic
  b) Long-form writing tasks that benefit from revision
  c) Simple factual lookups where the model either knows the answer or hallucinates
  d) Complex reasoning tasks with multiple interdependent steps

**Q3.** What is a key advantage of using a separate critic model instead of same-model reflection?
  a) It is always cheaper because smaller models can serve as critics
  b) It avoids the blind-spot problem where the same model repeats its own errors
  c) It eliminates the need for a critic prompt entirely
  d) It guarantees the output is factually correct

**Q4.** In the Reflexion pattern, what role does the 'verbal reinforcement' play?
  a) It replaces gradient-based fine-tuning with natural language feedback that persists across attempts
  b) It provides numerical reward scores that the model optimizes against
  c) It retrains the model weights after each failed attempt
  d) It routes the task to a different model if the first attempt fails
**Answers:** Q1: b) A critique step where the agent evaluates its own output and revises before responding
Q2: c) Simple factual lookups where the model either knows the answer or hallucinates
Q3: b) It avoids the blind-spot problem where the same model repeats its own errors
Q4: a) It replaces gradient-based fine-tuning with natural language feedback that persists across attempts

### Chapter 4: Agent Architectures — Routing and Handoffs

**Q1.** What is the primary purpose of a routing agent in a multi-agent system?
  a) To execute every task itself using a single large prompt
  b) To classify the incoming request and delegate it to the most appropriate specialized handler
  c) To store conversation history across all agents
  d) To retry failed tool calls until they succeed

**Q2.** Which routing strategy uses vector embeddings to match user queries to predefined intent categories?
  a) Keyword/regex matching
  b) LLM-based classification
  c) Embedding similarity routing
  d) Round-robin routing

**Q3.** What is the biggest risk when handing off a conversation from one agent to another?
  a) The handoff takes too long to execute
  b) The receiving agent uses a different LLM provider
  c) Context loss — the receiving agent lacks the conversation history, memory, or tool state needed to continue effectively
  d) The receiving agent has more tools available than necessary

**Q4.** How does routing relate to multi-agent systems covered in Module 9?
  a) Routing replaces the need for multi-agent coordination entirely
  b) The router evolves into a supervisor agent that orchestrates specialized agents, making routing the gateway pattern for multi-agent architectures
  c) Multi-agent systems never use routing because each agent handles all tasks
  d) Routing is only used in single-agent systems
**Answers:** Q1: b) To classify the incoming request and delegate it to the most appropriate specialized handler
Q2: c) Embedding similarity routing
Q3: c) Context loss — the receiving agent lacks the conversation history, memory, or tool state needed to continue effectively
Q4: b) The router evolves into a supervisor agent that orchestrates specialized agents, making routing the gateway pattern for multi-agent architectures

### Chapter 4: Agent Architectures — Workflow and State Machine Agents

**Q1.** What distinguishes a workflow agent from a fully autonomous agent like ReAct?
  a) Workflow agents cannot use LLMs at all -- they are purely rule-based systems
  b) Workflow agents have a fixed control flow structure, but use LLMs to make intelligent decisions within specific nodes
  c) Workflow agents are slower because they must wait for human approval at every step
  d) Workflow agents can only handle one type of task, while autonomous agents handle many

**Q2.** In a state machine agent, what determines which state the agent transitions to next?
  a) The LLM always decides the next state autonomously
  b) States are visited in a random order until the task is complete
  c) A transition function evaluates the current state and context to select the next state from a predefined set of valid transitions
  d) The user must manually select each next state

**Q3.** Why are workflow agents particularly well-suited for regulated industries like healthcare or finance?
  a) They are cheaper to run because they never call an LLM
  b) Their deterministic structure makes every path auditable and guarantees that required steps are never skipped
  c) They produce more creative outputs than autonomous agents
  d) Regulators require all software to use state machines

**Q4.** Which of the following is a hybrid workflow pattern?
  a) An agent that uses ReAct for every single decision
  b) A pipeline where deterministic nodes handle validation and routing while LLM nodes handle classification and generation
  c) A system that runs the same prompt in a loop until the output is correct
  d) A chatbot that answers questions without any predefined structure
**Answers:** Q1: b) Workflow agents have a fixed control flow structure, but use LLMs to make intelligent decisions within specific nodes
Q2: c) A transition function evaluates the current state and context to select the next state from a predefined set of valid transitions
Q3: b) Their deterministic structure makes every path auditable and guarantees that required steps are never skipped
Q4: b) A pipeline where deterministic nodes handle validation and routing while LLM nodes handle classification and generation

### Chapter 4: Agent Architectures — Choosing the Right Architecture

**Q1.** A startup needs an agent to handle customer emails that fall into clear categories (billing, shipping, returns), each with well-defined resolution steps. Which architecture is the best fit?
  a) ReAct, because it needs to reason about each email
  b) Plan-and-Execute, because it needs to create a plan for each response
  c) Routing with Workflow sub-agents, because inputs are classifiable and resolution steps are deterministic
  d) Self-Reflection, because response quality is critical

**Q2.** What is the most common mistake teams make when choosing an agent architecture?
  a) Using too many tools
  b) Over-engineering: applying a complex architecture to a simple, well-defined task
  c) Writing too many tests
  d) Choosing an architecture before defining the problem

**Q3.** When should you add Self-Reflection to an existing architecture?
  a) Always, since it improves every agent
  b) When the agent needs to run as fast as possible
  c) When output quality matters more than latency and cost, and errors are expensive
  d) Only when using Plan-and-Execute agents

**Q4.** What makes hybrid architectures powerful?
  a) They eliminate the need for tool use
  b) They combine the strengths of multiple patterns, using different architectures for different branches of the problem
  c) They are simpler to build than single-pattern architectures
  d) They remove the need for human oversight
**Answers:** Q1: c) Routing with Workflow sub-agents, because inputs are classifiable and resolution steps are deterministic
Q2: b) Over-engineering: applying a complex architecture to a simple, well-defined task
Q3: c) When output quality matters more than latency and cost, and errors are expensive
Q4: b) They combine the strengths of multiple patterns, using different architectures for different branches of the problem

### Chapter 5: Agent Design Patterns — Why Design Patterns Matter

**Q1.** What is the key difference between an agent architecture and a design pattern?
  a) Architectures are for production agents; design patterns are for prototypes
  b) Architectures describe WHAT the agent does (reasoning strategy); design patterns describe HOW the code is organized (implementation structure)
  c) Design patterns replace architectures once a project matures
  d) Architectures are language-specific; design patterns are language-agnostic

**Q2.** Why does ad-hoc agent code become problematic as a project grows?
  a) LLMs cannot process code written without patterns
  b) Ad-hoc code always runs slower than pattern-based code
  c) Cross-cutting concerns like logging, error handling, and context management get duplicated or forgotten, making the system fragile and hard to change
  d) Ad-hoc code cannot use tools or call APIs

**Q3.** Which design pattern ensures that a long-running agent can resume from where it left off after a crash?
  a) Tool Registry
  b) Middleware and Hooks
  c) Idempotency and Checkpointing
  d) Context Window Management

**Q4.** How do design patterns relate to production readiness (Module 11)?
  a) They are unrelated -- production concerns are handled by infrastructure alone
  b) Design patterns are only useful during development and are removed before deployment
  c) Patterns provide the internal structure that production infrastructure depends on -- you cannot monitor what you cannot intercept, or retry what is not idempotent
  d) Production agents should avoid design patterns to minimize latency
**Answers:** Q1: b) Architectures describe WHAT the agent does (reasoning strategy); design patterns describe HOW the code is organized (implementation structure)
Q2: c) Cross-cutting concerns like logging, error handling, and context management get duplicated or forgotten, making the system fragile and hard to change
Q3: c) Idempotency and Checkpointing
Q4: c) Patterns provide the internal structure that production infrastructure depends on -- you cannot monitor what you cannot intercept, or retry what is not idempotent

### Chapter 5: Agent Design Patterns — The Tool Registry Pattern

**Q1.** What problem does the Tool Registry pattern solve compared to hardcoded tool definitions?
  a) It makes tool calls execute faster by caching responses
  b) It decouples tool definitions from agent logic, so tools can be added, removed, or swapped without changing the agent code
  c) It replaces the need for tool schemas entirely
  d) It allows tools to call other tools directly without going through the LLM

**Q2.** In the registry implementation, what is the purpose of tagging tools with capabilities like 'search' or 'math'?
  a) Tags are required by the LLM to parse tool schemas
  b) Tags replace tool descriptions in the function schema
  c) Tags enable runtime filtering so the agent receives only the tools relevant to the current task, reducing context usage and improving selection accuracy
  d) Tags are only used for logging and have no effect on tool selection

**Q3.** Why does the ToolRegistry use a decorator (@registry.tool) for registration instead of requiring manual register() calls?
  a) Decorators make tool functions run faster
  b) Decorators co-locate registration metadata with the function definition, so adding a tool is a single-step operation that cannot drift out of sync
  c) Python requires decorators for all callable objects
  d) Decorators are the only way to extract function signatures in Python

**Q4.** What happens when an agent receives ALL available tools instead of a filtered subset?
  a) The LLM processes tools faster because it has more options
  b) Nothing changes -- LLMs handle any number of tools equally well
  c) The agent's context window fills with irrelevant tool schemas, increasing cost, latency, and the likelihood of the LLM selecting the wrong tool
  d) The agent automatically filters out tools it does not need
**Answers:** Q1: b) It decouples tool definitions from agent logic, so tools can be added, removed, or swapped without changing the agent code
Q2: c) Tags enable runtime filtering so the agent receives only the tools relevant to the current task, reducing context usage and improving selection accuracy
Q3: b) Decorators co-locate registration metadata with the function definition, so adding a tool is a single-step operation that cannot drift out of sync
Q4: c) The agent's context window fills with irrelevant tool schemas, increasing cost, latency, and the likelihood of the LLM selecting the wrong tool

### Chapter 5: Agent Design Patterns — Middleware and Hooks

**Q1.** In a middleware pipeline, what is the correct order of execution when an agent invokes a tool?
  a) Tool executes first, then pre-middleware runs, then post-middleware runs
  b) Pre-middleware chain runs in registration order, then the tool executes, then post-middleware chain runs in reverse registration order
  c) All middleware runs simultaneously in parallel around the tool call
  d) Pre-middleware chain runs in reverse order, then the tool executes, then post-middleware chain runs in registration order

**Q2.** Why is middleware a better approach than adding logging statements directly inside each tool function?
  a) Middleware runs faster because it uses async I/O
  b) Logging inside tools is not supported by most LLM frameworks
  c) Middleware separates cross-cutting concerns from business logic, so you can add, remove, or change logging without modifying any tool code
  d) Middleware automatically catches all exceptions, while inline logging does not

**Q3.** A middleware's before_tool hook returns None. What does this signal to the pipeline?
  a) The tool call should be skipped entirely
  b) The middleware encountered an error
  c) Proceed normally -- the call is approved and passes to the next middleware or to tool execution
  d) The middleware wants to replace the tool's result with None

**Q4.** Which middleware use case connects most directly to Module 11's production observability requirements?
  a) PII redaction middleware that masks sensitive data before tool calls
  b) Rate-limiting middleware that throttles API calls
  c) Logging and cost-tracking middleware that records every tool invocation, its latency, token usage, and outcome
  d) Validation middleware that checks tool input schemas
**Answers:** Q1: b) Pre-middleware chain runs in registration order, then the tool executes, then post-middleware chain runs in reverse registration order
Q2: c) Middleware separates cross-cutting concerns from business logic, so you can add, remove, or change logging without modifying any tool code
Q3: c) Proceed normally -- the call is approved and passes to the next middleware or to tool execution
Q4: a) PII redaction middleware that masks sensitive data before tool calls

### Chapter 5: Agent Design Patterns — Context Window Management

**Q1.** An agent has a 128k token context window. The system prompt uses 2k tokens, conversation history uses 80k, and the agent needs to call a tool that returns 60k tokens. What should the context manager do?
  a) Reject the tool call because the result will not fit
  b) Truncate the tool result to fit the remaining space
  c) Summarize or evict older conversation history to make room for the tool result, since recent tool output is more relevant than old messages
  d) Switch to a model with a larger context window

**Q2.** Why is a sliding window alone insufficient for long-running agents?
  a) Sliding windows are too slow to compute
  b) LLMs cannot process messages that arrive out of order
  c) The window discards old messages indiscriminately -- critical early instructions or key facts can be lost even though they are still relevant
  d) Sliding windows only work with chat models, not completion models

**Q3.** What is the primary purpose of a token budget in a context manager?
  a) To minimize the cost of API calls by using fewer tokens
  b) To ensure each category of content (system prompt, history, tool results, generation) gets a guaranteed allocation so no single category can starve the others
  c) To limit the number of messages the user can send per session
  d) To prevent the LLM from generating responses that are too long

**Q4.** Which combination of strategies would best serve a multi-step research agent that runs for hundreds of turns?
  a) Sliding window only, dropping the oldest messages each turn
  b) Priority-based retention for critical messages plus periodic summarization of older conversation segments
  c) Chunking all messages into fixed-size blocks and loading them on demand
  d) Increasing the context window size until all messages fit
**Answers:** Q1: c) Summarize or evict older conversation history to make room for the tool result, since recent tool output is more relevant than old messages
Q2: c) The window discards old messages indiscriminately -- critical early instructions or key facts can be lost even though they are still relevant
Q3: b) To ensure each category of content (system prompt, history, tool results, generation) gets a guaranteed allocation so no single category can starve the others
Q4: b) Priority-based retention for critical messages plus periodic summarization of older conversation segments

### Chapter 5: Agent Design Patterns — Fallback and Escalation Chains

**Q1.** In a model cascade, why should you start with the smallest/cheapest model instead of always using the most capable one?
  a) Smaller models always produce more accurate answers
  b) Starting cheap reduces cost and latency for the majority of requests that do not require a powerful model, while still escalating hard cases
  c) Larger models cannot handle simple queries
  d) API providers require you to call models in ascending order of capability

**Q2.** What is the primary difference between a fallback chain (from Module 3 Lesson 04) and an escalation chain?
  a) Fallback chains try alternative tools that achieve the same goal through different methods; escalation chains move to progressively more capable (and expensive) resources, including humans
  b) Fallback chains are for tool errors; escalation chains are for network errors
  c) They are the same thing with different names
  d) Escalation chains are faster because they skip the cheapest option

**Q3.** When should an agent escalate a request to a human operator?
  a) Whenever the first model returns any response
  b) Only when the system crashes with an unhandled exception
  c) When automated tiers are exhausted, confidence remains below threshold, or the request involves high-stakes decisions that require human judgment
  d) Humans should never be in the loop -- the agent should always handle everything autonomously

**Q4.** What role does the confidence score play in confidence-based routing?
  a) It determines which API key to use for the request
  b) It measures how many tokens the model consumed
  c) It acts as a gate: requests above the threshold are accepted, while those below are escalated to the next tier for a second opinion
  d) It is only used for logging and has no effect on routing
**Answers:** Q1: b) Starting cheap reduces cost and latency for the majority of requests that do not require a powerful model, while still escalating hard cases
Q2: a) Fallback chains try alternative tools that achieve the same goal through different methods; escalation chains move to progressively more capable (and expensive) resources, including humans
Q3: c) When automated tiers are exhausted, confidence remains below threshold, or the request involves high-stakes decisions that require human judgment
Q4: c) It acts as a gate: requests above the threshold are accepted, while those below are escalated to the next tier for a second opinion

### Chapter 5: Agent Design Patterns — Idempotency and Checkpointing

**Q1.** What does it mean for an agent action to be idempotent?
  a) The action completes faster on the second execution
  b) The action cannot fail under any circumstances
  c) Executing the action multiple times produces the same result as executing it once
  d) The action is automatically retried by the framework until it succeeds

**Q2.** Why is checkpointing especially valuable for Plan-and-Execute agents?
  a) Checkpointing makes the planner produce better plans
  b) Plan-and-Execute agents have ordered steps with accumulated results, so a crash without checkpointing loses all completed work and forces a full restart
  c) Checkpointing is only useful for ReAct agents, not Plan-and-Execute
  d) Plan-and-Execute agents cannot function without checkpointing enabled

**Q3.** Which of the following is NOT a valid checkpoint storage strategy?
  a) Writing agent state to a JSON file after each step
  b) Saving state to a database with a unique run ID
  c) Storing the checkpoint only in the agent's local variables
  d) Using a key-value store like Redis with expiration for short-lived tasks

**Q4.** What is the relationship between idempotency and retries?
  a) Idempotent actions do not need retries because they never fail
  b) Retries are only safe when the action being retried is idempotent — otherwise, retrying a partially completed action can cause duplicate side effects
  c) Retries automatically make any action idempotent
  d) Idempotency and retries are unrelated concepts that solve different problems
**Answers:** Q1: c) Executing the action multiple times produces the same result as executing it once
Q2: b) Plan-and-Execute agents have ordered steps with accumulated results, so a crash without checkpointing loses all completed work and forces a full restart
Q3: c) Storing the checkpoint only in the agent's local variables
Q4: b) Retries are only safe when the action being retried is idempotent — otherwise, retrying a partially completed action can cause duplicate side effects

### Chapter 6: Memory & Knowledge — Why Memory Matters

**Q1.** An agent successfully helps a user configure a complex deployment over a 30-message conversation. The next day, the user returns and says 'use the same deployment config as yesterday.' Why can't the agent comply?
  a) The agent's tools no longer have access to the deployment system
  b) LLMs are stateless -- each conversation starts with an empty context window, so the agent has no record of yesterday's session
  c) The user needs to re-authenticate before the agent can access previous work
  d) The agent remembers the conversation but its context window is too small to hold both old and new messages

**Q2.** Which human memory type is most analogous to an LLM agent's context window?
  a) Episodic memory -- recalling specific past experiences
  b) Semantic memory -- general knowledge about the world
  c) Working memory -- the small amount of information actively held in mind for the current task
  d) Procedural memory -- knowing how to perform learned skills

**Q3.** A customer support agent handles hundreds of tickets per day. Which memory type would allow it to recall that a specific customer reported the same bug three weeks ago?
  a) Working memory
  b) Procedural memory
  c) Episodic memory
  d) Semantic memory

**Q4.** Why is context window management (Module 5) necessary but insufficient for giving agents true memory?
  a) Context management only works with short conversations
  b) Context management optimizes what fits in a single session's window, but everything is still lost when the session ends -- it cannot persist knowledge across conversations
  c) Context management is too expensive to run continuously
  d) Context management only applies to tool results, not conversation history
**Answers:** Q1: b) LLMs are stateless -- each conversation starts with an empty context window, so the agent has no record of yesterday's session
Q2: c) Working memory -- the small amount of information actively held in mind for the current task
Q3: c) Episodic memory
Q4: b) Context management optimizes what fits in a single session's window, but everything is still lost when the session ends -- it cannot persist knowledge across conversations

### Chapter 6: Memory & Knowledge — Conversation and Short-Term Memory

**Q1.** A customer support agent uses a buffer memory that stores the full conversation. After 80 turns, the context window is nearly full. What is the most appropriate next step?
  a) Restart the conversation and ask the user to repeat their issue
  b) Switch to a model with a larger context window
  c) Transition to a sliding window or summarization strategy to compress older turns while preserving the most important context
  d) Stop using memory entirely and only process the latest message

**Q2.** Why is a summarization memory strategy more expensive than a sliding window?
  a) Summarization requires a vector database, which has hosting costs
  b) Summaries consume more tokens than the original messages
  c) Each summarization step requires an additional LLM call to generate the compressed summary, adding latency and API costs
  d) Sliding windows cannot be used with chat-based models

**Q3.** An agent uses a sliding window of 20 messages. In message 3, the user said 'Always respond in French.' At message 25, the agent starts responding in English. What went wrong?
  a) The LLM forgot the instruction due to attention limitations
  b) The sliding window evicted message 3 when the window advanced past it, so the instruction is no longer in the context
  c) The summarization step failed to include the language preference
  d) The system prompt overrode the user's language preference

**Q4.** When injecting a conversation summary into the context, where should it be placed relative to other messages?
  a) At the very end, after the latest user message
  b) Randomly inserted among recent messages to simulate natural recall
  c) Immediately after the system prompt and before the recent message window, so the LLM has background context before processing current turns
  d) In a separate API call before the main conversation request
**Answers:** Q1: c) Transition to a sliding window or summarization strategy to compress older turns while preserving the most important context
Q2: c) Each summarization step requires an additional LLM call to generate the compressed summary, adding latency and API costs
Q3: b) The sliding window evicted message 3 when the window advanced past it, so the instruction is no longer in the context
Q4: c) Immediately after the system prompt and before the recent message window, so the LLM has background context before processing current turns

### Chapter 6: Memory & Knowledge — Long-Term Memory

**Q1.** An agent recalls that a user prefers JSON output because they said so three sessions ago. Which type of long-term memory is this?
  a) Procedural memory -- it is a learned skill the agent acquired
  b) Semantic memory -- it is a general fact about the world
  c) Episodic memory -- it is a recalled experience from a specific past interaction
  d) Working memory -- it is held in the current context window

**Q2.** Why do most long-term memory systems store embeddings alongside raw text?
  a) Embeddings compress text to save disk space
  b) Embeddings allow semantic similarity search, so the agent can find relevant memories even when the wording differs from the query
  c) Embeddings are required by the LLM to process text inputs
  d) Embeddings replace the need for a database entirely

**Q3.** Which storage backend would be most appropriate for a production agent that needs sub-millisecond memory retrieval, handles millions of memories, and already runs a PostgreSQL database?
  a) SQLite with a JSON column for embeddings
  b) PostgreSQL with the pgvector extension
  c) A flat JSON file on the local filesystem
  d) Redis with in-memory storage only

**Q4.** What problem does the store-retrieve-update cycle solve that simple 'append-only' memory storage does not?
  a) It allows the agent to delete all memories at once
  b) It ensures memories are always stored in chronological order
  c) It keeps memories accurate over time by letting the agent correct, merge, or deprecate outdated information
  d) It prevents the agent from ever retrieving irrelevant memories
**Answers:** Q1: c) Episodic memory -- it is a recalled experience from a specific past interaction
Q2: b) Embeddings allow semantic similarity search, so the agent can find relevant memories even when the wording differs from the query
Q3: b) PostgreSQL with the pgvector extension
Q4: c) It keeps memories accurate over time by letting the agent correct, merge, or deprecate outdated information

### Chapter 6: Memory & Knowledge — Retrieval-Augmented Generation (RAG)

**Q1.** What is the primary advantage of RAG over fine-tuning for adding domain knowledge to an LLM?
  a) RAG produces faster inference times because the model is smaller
  b) RAG allows you to update knowledge without retraining the model, and the sources can be cited
  c) RAG eliminates the need for prompt engineering entirely
  d) RAG works without any external infrastructure or data storage

**Q2.** In a RAG pipeline, what is the purpose of the chunking step during document indexing?
  a) To compress documents so they use fewer tokens in the LLM's context window
  b) To encrypt documents before storing them in the vector database
  c) To split large documents into smaller pieces that can be embedded and retrieved individually
  d) To remove duplicate content across multiple documents

**Q3.** Why does chunk overlap matter when splitting documents?
  a) It preserves context that would otherwise be lost at chunk boundaries, so retrieval does not miss information split across two chunks
  b) It increases the total number of chunks, which improves search speed
  c) It reduces the memory required by the vector store
  d) It ensures every chunk is exactly the same size

**Q4.** What role does the system prompt play in a RAG pipeline when passing retrieved context to the LLM?
  a) It stores the retrieved documents permanently in the model's weights
  b) It replaces the vector search step by telling the model which documents to retrieve
  c) It instructs the model to answer based on the provided context and to say when it does not know
  d) It converts the retrieved text into embeddings before the model processes it
**Answers:** Q1: b) RAG allows you to update knowledge without retraining the model, and the sources can be cited
Q2: c) To split large documents into smaller pieces that can be embedded and retrieved individually
Q3: a) It preserves context that would otherwise be lost at chunk boundaries, so retrieval does not miss information split across two chunks
Q4: c) It instructs the model to answer based on the provided context and to say when it does not know

### Chapter 6: Memory & Knowledge — Embeddings and Vector Stores

**Q1.** An embedding model produces 1536-dimensional vectors. Two document chunks have a cosine similarity of 0.92. What does this tell you?
  a) The documents are exactly 92% identical in wording
  b) The documents are semantically very similar -- their meaning vectors point in nearly the same direction in the 1536-dimensional space
  c) The documents share 92% of their vocabulary
  d) The embedding model is 92% confident the documents are related

**Q2.** You are building a RAG system for a legal firm with 10 million contract clauses that need sub-second query latency. Which vector store architecture is most appropriate?
  a) FAISS with a flat (brute-force) index stored in memory on a single machine
  b) A managed cloud vector database like Pinecone that provides automatic sharding, replication, and approximate nearest neighbor search
  c) ChromaDB running in-process alongside the application
  d) PostgreSQL with pgvector using exact nearest neighbor queries

**Q3.** Why does HNSW generally outperform IVF for recall at the same query latency?
  a) HNSW uses less memory than IVF
  b) HNSW searches the entire dataset exhaustively while IVF does not
  c) HNSW builds a multi-layer graph of navigable connections, allowing it to traverse from coarse regions to fine-grained neighborhoods without being restricted to a single cluster like IVF
  d) HNSW uses a simpler distance metric that is faster to compute

**Q4.** When should you choose a smaller embedding dimension (e.g., 256) over a larger one (e.g., 3072)?
  a) Always -- smaller dimensions are strictly better because they are faster
  b) When your documents are short and simple, so fine-grained semantic distinctions are unnecessary, and you need to optimize for storage and latency at scale
  c) When you need the highest possible retrieval accuracy regardless of cost
  d) Only when using cosine similarity instead of dot product
**Answers:** Q1: b) The documents are semantically very similar -- their meaning vectors point in nearly the same direction in the 1536-dimensional space
Q2: b) A managed cloud vector database like Pinecone that provides automatic sharding, replication, and approximate nearest neighbor search
Q3: c) HNSW builds a multi-layer graph of navigable connections, allowing it to traverse from coarse regions to fine-grained neighborhoods without being restricted to a single cluster like IVF
Q4: b) When your documents are short and simple, so fine-grained semantic distinctions are unnecessary, and you need to optimize for storage and latency at scale

### Chapter 6: Memory & Knowledge — Advanced RAG Patterns

**Q1.** What is the main advantage of hybrid search (BM25 + vector) over pure vector search?
  a) It is faster because BM25 skips the embedding step entirely
  b) It captures both exact keyword matches and semantic similarity, covering cases where either alone would miss relevant documents
  c) It eliminates the need for a vector database
  d) It always returns fewer results, which reduces context window usage

**Q2.** In the HyDE technique, what does the LLM generate before performing retrieval?
  a) A list of keywords extracted from the user's query
  b) A confidence score indicating whether retrieval is needed
  c) A hypothetical answer document that is then embedded and used as the search query
  d) A rewritten version of the user's query with synonyms

**Q3.** What distinguishes agentic RAG from a standard RAG pipeline?
  a) Agentic RAG uses a fixed pipeline but with more retrieval steps
  b) Agentic RAG replaces the LLM with a classifier for retrieval decisions
  c) An agent dynamically decides when to retrieve, what query to use, and whether the results are sufficient -- retrieval becomes a tool, not a fixed stage
  d) Agentic RAG only works with structured databases, not vector stores

**Q4.** Why is a cross-encoder reranker more accurate than the initial retrieval scores but too slow to use as the primary search method?
  a) Cross-encoders require GPU clusters that are not available at query time
  b) Cross-encoders process the query and each document jointly as a single input, which is expensive but captures fine-grained relevance that independent embeddings miss
  c) Cross-encoders only work on documents shorter than 512 tokens
  d) Cross-encoders use a different embedding model that has not been fine-tuned
**Answers:** Q1: b) It captures both exact keyword matches and semantic similarity, covering cases where either alone would miss relevant documents
Q2: c) A hypothetical answer document that is then embedded and used as the search query
Q3: c) An agent dynamically decides when to retrieve, what query to use, and whether the results are sufficient -- retrieval becomes a tool, not a fixed stage
Q4: b) Cross-encoders process the query and each document jointly as a single input, which is expensive but captures fine-grained relevance that independent embeddings miss

### Chapter 7: Agent Frameworks & SDKs — The Framework Landscape

**Q1.** A team has built a working agent using raw API calls with custom tool dispatch, a hand-rolled memory store, and bespoke state management. They are now spending 40% of engineering time maintaining this infrastructure instead of improving agent behavior. What does this situation best illustrate?
  a) The team chose the wrong LLM provider
  b) The undifferentiated heavy lifting problem -- frameworks exist to absorb this infrastructure burden so teams can focus on agent logic
  c) Raw API agents are always inferior to framework-based agents
  d) The team should rewrite their agent in a compiled language for performance

**Q2.** Which layer of the framework spectrum would you choose for an agent that needs a custom multi-step workflow with conditional branching, human-in-the-loop approval, and persistent state across retries?
  a) Raw API calls -- maximum flexibility for custom workflows
  b) An SDK like the OpenAI Agents SDK -- provides the agent loop with light abstractions
  c) A graph-based framework like LangGraph -- explicitly models workflows as stateful graphs with conditional edges
  d) A platform like Amazon Bedrock Agents -- fully managed, no custom logic needed

**Q3.** A startup is building its first AI feature: a simple chatbot that answers questions about their documentation using RAG. The team has one engineer with limited AI experience. They need to ship in two weeks. Which approach best fits their constraints?
  a) Build from raw API calls to maintain full control
  b) Use LangGraph for its powerful state management
  c) Use a high-level framework or platform that bundles RAG, tool use, and hosting to minimize custom code
  d) Write a custom orchestrator to future-proof the architecture

**Q4.** Why is understanding how to build agent components from scratch (as you did in Modules 1-6) valuable even when you plan to use a framework?
  a) Frameworks are always buggy, so you will need to rewrite their internals
  b) It impresses hiring managers during technical interviews
  c) It allows you to evaluate framework tradeoffs, debug issues that cross abstraction boundaries, and know when a framework's design does not fit your problem
  d) It is not valuable -- frameworks completely abstract away the need for low-level understanding
**Answers:** Q1: b) The undifferentiated heavy lifting problem -- frameworks exist to absorb this infrastructure burden so teams can focus on agent logic
Q2: c) A graph-based framework like LangGraph -- explicitly models workflows as stateful graphs with conditional edges
Q3: c) Use a high-level framework or platform that bundles RAG, tool use, and hosting to minimize custom code
Q4: c) It allows you to evaluate framework tradeoffs, debug issues that cross abstraction boundaries, and know when a framework's design does not fit your problem

### Chapter 7: Agent Frameworks & SDKs — OpenAI Agents SDK

**Q1.** What is the primary role of the Runner in the OpenAI Agents SDK?
  a) It defines the tools available to an agent
  b) It manages the agent loop, executing tool calls and handoffs until a final output is produced
  c) It validates user input before passing it to the agent
  d) It serializes agent responses into JSON format

**Q2.** In the OpenAI Agents SDK, what does a Handoff allow an agent to do?
  a) Transfer the entire conversation to a different agent that is better suited for the task
  b) Retry a failed tool call with different arguments
  c) Send intermediate results directly to the user
  d) Fork the conversation into parallel execution branches

**Q3.** Which of the following correctly describes how Guardrails work in the SDK?
  a) They modify the agent's system prompt at runtime to prevent unsafe outputs
  b) They are applied only after the agent produces its final response
  c) They run in parallel with the agent, checking input or output, and can tripwire to halt execution
  d) They replace the need for tool-level input validation

**Q4.** How does the OpenAI Agents SDK differ from building agents with raw API calls?
  a) It uses a different underlying model than the OpenAI Chat Completions API
  b) It removes the need for an API key entirely
  c) It abstracts away the agent loop, tool dispatch, conversation history, and multi-agent routing into declarative primitives
  d) It requires you to manually manage conversation history and tool execution
**Answers:** Q1: b) It manages the agent loop, executing tool calls and handoffs until a final output is produced
Q2: a) Transfer the entire conversation to a different agent that is better suited for the task
Q3: c) They run in parallel with the agent, checking input or output, and can tripwire to halt execution
Q4: d) It requires you to manually manage conversation history and tool execution

### Chapter 7: Agent Frameworks & SDKs — Anthropic Claude Agent SDK

**Q1.** In Claude's Messages API, what content block type does the model return when it wants to call a tool?
  a) A function_call block with the tool name and arguments
  b) A tool_use block containing an id, the tool name, and the input parameters
  c) A tool_result block with the tool invocation details
  d) A text block containing a JSON-formatted tool request

**Q2.** What is the recommended way to enable extended thinking on Claude Opus 4 and Sonnet 4.6?
  a) Set thinking to {type: 'enabled', budget_tokens: 8000}
  b) Add the header 'anthropic-beta: extended-thinking-2025' to the request
  c) Set thinking to {type: 'adaptive'} and optionally control depth with the effort parameter
  d) Pass a reasoning_effort parameter set to 'high'

**Q3.** In the agentic loop pattern with Claude, what stop_reason value indicates that the model wants to call a tool?
  a) end_turn
  b) tool_call
  c) tool_use
  d) pause_turn

**Q4.** When building a multi-turn conversation with Claude's Messages API, what must you do with the assistant's response before sending the next user message?
  a) Extract only the text content and append it as a string
  b) Append the full response.content array as the assistant message to preserve all content blocks
  c) Send only the tool results without the assistant message
  d) Reset the messages array and include only the latest exchange
**Answers:** Q1: b) A tool_use block containing an id, the tool name, and the input parameters
Q2: c) Set thinking to {type: 'adaptive'} and optionally control depth with the effort parameter
Q3: c) tool_use
Q4: b) Append the full response.content array as the assistant message to preserve all content blocks

### Chapter 7: Agent Frameworks & SDKs — LangGraph

**Q1.** What is the core abstraction that distinguishes LangGraph from linear agent frameworks?
  a) A message queue that buffers tool calls between steps
  b) A StateGraph where nodes are functions, edges define transitions, and a shared state object flows through the graph
  c) A decorator-based system that wraps Python functions as agents
  d) A prompt template engine that generates system prompts automatically

**Q2.** What is the purpose of a conditional edge in LangGraph?
  a) It adds a random delay between node executions for rate limiting
  b) It allows two nodes to execute in parallel
  c) It routes execution to different nodes based on the current state, enabling branching logic like 'continue reasoning or return a final answer'
  d) It validates the state schema before passing data to the next node

**Q3.** How does LangGraph's checkpointing relate to the idempotency and checkpointing patterns covered in Module 5?
  a) LangGraph checkpointing is a built-in implementation of the checkpoint-and-resume pattern -- it persists graph state at each step so execution can resume after failures or pauses
  b) They are unrelated -- LangGraph checkpointing only handles message history, not execution state
  c) LangGraph replaces the need for idempotency because graphs never fail
  d) Checkpointing in LangGraph is only used for multi-agent systems, not single agents

**Q4.** Which of the following is a valid reason to prefer LangGraph's graph-based approach over a simple while-loop agent?
  a) Graphs always execute faster than loops because they use parallel processing
  b) Graphs require less code than a while-loop for every use case
  c) Graphs make complex workflows with branching, cycles, human-in-the-loop checkpoints, and subgraph composition explicit and inspectable
  d) Graphs eliminate the need for prompt engineering entirely
**Answers:** Q1: b) A StateGraph where nodes are functions, edges define transitions, and a shared state object flows through the graph
Q2: c) It routes execution to different nodes based on the current state, enabling branching logic like 'continue reasoning or return a final answer'
Q3: a) LangGraph checkpointing is a built-in implementation of the checkpoint-and-resume pattern -- it persists graph state at each step so execution can resume after failures or pauses
Q4: c) Graphs make complex workflows with branching, cycles, human-in-the-loop checkpoints, and subgraph composition explicit and inspectable

### Chapter 7: Agent Frameworks & SDKs — CrewAI and AutoGen

**Q1.** In CrewAI, what is the purpose of the 'backstory' field when defining an Agent?
  a) It stores the agent's conversation history from previous runs
  b) It provides rich context that shapes how the agent approaches its tasks and what expertise it draws on
  c) It defines the output format that the agent must produce
  d) It specifies which tools the agent is allowed to use

**Q2.** What is the key difference between CrewAI's sequential and hierarchical process types?
  a) Sequential processes are faster because they skip validation steps
  b) Hierarchical processes require fewer agents than sequential ones
  c) In a sequential process tasks execute in order, while in a hierarchical process a manager agent delegates and coordinates tasks dynamically
  d) Sequential processes support tool use but hierarchical processes do not

**Q3.** In AutoGen, what does the GroupChatManager do?
  a) It manages API rate limits across all agents in the group
  b) It orchestrates turn-taking among agents, deciding which agent speaks next based on the conversation context
  c) It provides a shared memory store that all agents read from
  d) It compiles the final output from all agent responses into a single document

**Q4.** Which scenario would benefit MOST from using CrewAI or AutoGen over a single-agent framework?
  a) A chatbot that answers frequently asked questions from a knowledge base
  b) A workflow where distinct specialists (researcher, analyst, writer) must collaborate and hand off work products to produce a final deliverable
  c) A simple data extraction pipeline that parses structured fields from invoices
  d) A classification task that labels support tickets by category
**Answers:** Q1: b) It provides rich context that shapes how the agent approaches its tasks and what expertise it draws on
Q2: c) In a sequential process tasks execute in order, while in a hierarchical process a manager agent delegates and coordinates tasks dynamically
Q3: b) It orchestrates turn-taking among agents, deciding which agent speaks next based on the conversation context
Q4: b) A workflow where distinct specialists (researcher, analyst, writer) must collaborate and hand off work products to produce a final deliverable

### Chapter 7: Agent Frameworks & SDKs — Framework Comparison and Selection

**Q1.** When is using a raw API (Anthropic or OpenAI) directly the best choice for building an agent?
  a) When you need multi-agent orchestration with role-based delegation
  b) When you have a simple, single-agent task and want full control with zero abstraction overhead
  c) When you require built-in checkpointing and human-in-the-loop workflows
  d) When your team is large and needs opinionated structure to stay consistent

**Q2.** Which framework is the strongest choice when you need durable, long-running agent workflows with built-in checkpointing and conditional routing?
  a) CrewAI
  b) OpenAI Agents SDK
  c) LangGraph
  d) Raw Anthropic SDK

**Q3.** What is the primary risk of choosing a high-level multi-agent framework like CrewAI for a task that only requires a single agent with two tools?
  a) CrewAI cannot handle tool use at all
  b) You introduce unnecessary abstraction, dependencies, and debugging complexity for a problem that a simple agent loop solves in 30 lines
  c) CrewAI requires a paid license for single-agent use
  d) High-level frameworks always produce slower inference than raw APIs

**Q4.** A team needs to support both Claude and GPT models, requires graph-based workflows with state persistence, and plans to deploy to production with observability. Which framework best fits?
  a) Raw OpenAI SDK, since it supports GPT natively
  b) Anthropic Claude SDK, since Claude is the best model for agents
  c) LangGraph, since it offers model-agnostic graphs, checkpointing, and LangSmith integration
  d) AutoGen, since it supports multi-model conversations
**Answers:** Q1: b) When you have a simple, single-agent task and want full control with zero abstraction overhead
Q2: c) LangGraph
Q3: b) You introduce unnecessary abstraction, dependencies, and debugging complexity for a problem that a simple agent loop solves in 30 lines
Q4: c) LangGraph, since it offers model-agnostic graphs, checkpointing, and LangSmith integration

### Chapter 8: Multi-Modal Agents — Why Multi-Modal Agents?

**Q1.** An agent is asked to verify that a web application's checkout button is green, properly aligned, and displays the text 'Complete Purchase'. The agent has access to the page's HTML source and a screenshot. Why is the screenshot essential for this task?
  a) Screenshots load faster than parsing HTML
  b) HTML source reveals the DOM structure but not the rendered visual result -- CSS overrides, dynamic styling, and rendering bugs can make the actual appearance differ from what the markup implies
  c) LLMs cannot process HTML, so the screenshot is the only usable input
  d) Screenshots contain metadata that HTML does not, such as server response times

**Q2.** A company builds an agent to process incoming invoices. The invoices arrive as scanned PDFs containing tables, handwritten notes, company logos, and stamps. A text-only agent extracts the OCR text and attempts to parse it. What is the primary limitation of this approach?
  a) OCR text is always inaccurate and cannot be trusted
  b) Text-only agents cannot connect to PDF libraries
  c) OCR captures characters but loses spatial layout, table structure, and visual context like stamps and signatures -- the agent cannot distinguish a total from a line item or verify a stamp's presence without seeing the document
  d) The agent needs audio input to process invoices correctly

**Q3.** Which of the following best describes the 'modality gap' in the context of agent systems?
  a) The difference in cost between text-based and image-based API calls
  b) The mismatch between the text-only capabilities of most agent architectures and the predominantly non-textual nature of real-world information and tasks
  c) The latency difference between processing text and processing video streams
  d) The gap between open-source and commercial multi-modal models

**Q4.** A team is designing an agent that monitors a factory floor. The agent needs to detect equipment anomalies from camera feeds, understand spoken alerts from workers over a noisy intercom, and generate visual incident reports with annotated images. Which architecture element is most critical for this agent?
  a) A unified reasoning engine that can accept and correlate inputs from vision, audio, and text modalities and dispatch generation tools across modalities
  b) A faster GPU for real-time video processing
  c) Separate specialized agents for each modality with no shared context
  d) A text-only LLM with extensive fine-tuning on factory terminology
**Answers:** Q1: b) HTML source reveals the DOM structure but not the rendered visual result -- CSS overrides, dynamic styling, and rendering bugs can make the actual appearance differ from what the markup implies
Q2: c) OCR captures characters but loses spatial layout, table structure, and visual context like stamps and signatures -- the agent cannot distinguish a total from a line item or verify a stamp's presence without seeing the document
Q3: b) The mismatch between the text-only capabilities of most agent architectures and the predominantly non-textual nature of real-world information and tasks
Q4: a) A unified reasoning engine that can accept and correlate inputs from vision, audio, and text modalities and dispatch generation tools across modalities

### Chapter 8: Multi-Modal Agents — Vision-Language Agents

**Q1.** When passing an image to Claude's Messages API, which two source types are supported for the image content block?
  a) file_path and http_url
  b) base64 and url
  c) binary and data_uri
  d) raw_bytes and signed_url

**Q2.** Why does a vision-language agent typically extract structured data (JSON, typed objects) from visual inputs rather than returning free-form text descriptions?
  a) Structured output is smaller and reduces token costs
  b) Free-form text cannot be generated from images by current models
  c) Structured output enables downstream tools and code to act on the extracted information reliably
  d) Structured output is required by the API and free-form responses are rejected

**Q3.** In the document processing agent workflow, what is the purpose of the classification step that occurs before extraction?
  a) It determines the document's file size to choose the right model
  b) It identifies the document type so the agent can apply the correct extraction schema and prompt
  c) It converts the image from RGB to grayscale for better OCR accuracy
  d) It checks whether the document contains sensitive information that should be redacted

**Q4.** How does a vision-language agent connect to the tool use patterns covered in Module 3?
  a) Vision replaces tools entirely, so agents no longer need external function calls
  b) The agent uses vision to perceive visual information and then invokes tools to act on what it sees, combining perception and action in the agent loop
  c) Tool use is only relevant to text-based agents and cannot be combined with image inputs
  d) Vision-language agents require a separate tool-use model that runs alongside the vision model
**Answers:** Q1: b) base64 and url
Q2: c) Structured output enables downstream tools and code to act on the extracted information reliably
Q3: b) It identifies the document type so the agent can apply the correct extraction schema and prompt
Q4: b) The agent uses vision to perceive visual information and then invokes tools to act on what it sees, combining perception and action in the agent loop

### Chapter 8: Multi-Modal Agents — Audio and Speech Agents

**Q1.** In a voice agent pipeline, what is the primary purpose of Voice Activity Detection (VAD)?
  a) Converting raw audio waveforms into mel spectrograms for the STT model
  b) Detecting when the user starts and stops speaking so the agent knows when to process input
  c) Reducing background noise before audio reaches the transcription engine
  d) Measuring the latency between user speech and agent response

**Q2.** Which approach minimizes perceived latency in a real-time voice agent?
  a) Buffering the entire TTS response before sending any audio to the user
  b) Using a larger STT model for higher accuracy at the cost of speed
  c) Streaming partial TTS audio chunks over WebSocket while the LLM is still generating tokens
  d) Waiting for the complete LLM response before starting text-to-speech synthesis

**Q3.** What is the key difference between Whisper and Deepgram Nova for speech-to-text in agent pipelines?
  a) Whisper only supports English while Deepgram supports all languages
  b) Whisper is an open-source model you can self-host, while Deepgram Nova is a cloud-native streaming API optimized for low latency
  c) Deepgram is open-source and Whisper is proprietary
  d) Whisper uses a streaming architecture while Deepgram requires batch processing

**Q4.** Why do voice agents typically separate the STT, LLM, and TTS components rather than using a single end-to-end speech model?
  a) End-to-end models do not exist yet for conversational AI
  b) Separating components is always cheaper than using a single model
  c) Modularity lets you independently optimize, swap, and debug each stage, and leverage the best specialized model for each task
  d) Single models cannot handle multiple languages
**Answers:** Q1: b) Detecting when the user starts and stops speaking so the agent knows when to process input
Q2: c) Streaming partial TTS audio chunks over WebSocket while the LLM is still generating tokens
Q3: b) Whisper is an open-source model you can self-host, while Deepgram Nova is a cloud-native streaming API optimized for low latency
Q4: c) Modularity lets you independently optimize, swap, and debug each stage, and leverage the best specialized model for each task

### Chapter 8: Multi-Modal Agents — Image and Video Generation

**Q1.** Why do agents benefit from iterative image generation rather than single-shot generation?
  a) Single-shot generation is not supported by any API
  b) Iterative refinement lets the agent evaluate output, adjust prompts, and converge on the user's intent -- just like a human designer would revise a draft
  c) Iterative generation is always faster than single-shot
  d) LLMs cannot call image generation APIs without multiple attempts

**Q2.** What is the role of a prompt engineering step before calling an image generation API?
  a) It compresses the user's request to save API tokens
  b) It converts the user's natural language into a structured, detail-rich prompt optimized for the generation model's strengths and style vocabulary
  c) It translates the prompt into a different language
  d) It is only needed for video generation, not image generation

**Q3.** Which of the following is a key difference between image generation and video generation from an agent's perspective?
  a) Image generation requires tool use but video generation does not
  b) Video generation APIs are always synchronous while image generation is asynchronous
  c) Video generation is typically asynchronous with longer processing times, requiring the agent to poll for completion rather than receiving immediate results
  d) There is no meaningful difference -- agents treat them identically

**Q4.** When an agent wraps DALL-E as a tool, what should the tool's return value include besides the image URL?
  a) The revised prompt that DALL-E actually used, so the agent can reason about what was generated and refine if needed
  b) Only the raw bytes of the image
  c) The model's internal weights for the generated image
  d) A full training log of the diffusion process
**Answers:** Q1: b) Iterative refinement lets the agent evaluate output, adjust prompts, and converge on the user's intent -- just like a human designer would revise a draft
Q2: b) It converts the user's natural language into a structured, detail-rich prompt optimized for the generation model's strengths and style vocabulary
Q3: c) Video generation is typically asynchronous with longer processing times, requiring the agent to poll for completion rather than receiving immediate results
Q4: a) The revised prompt that DALL-E actually used, so the agent can reason about what was generated and refine if needed

### Chapter 8: Multi-Modal Agents — Cross-Modal Reasoning

**Q1.** What is grounding in the context of multi-modal agents?
  a) Connecting the agent to a physical robot that can interact with the real world
  b) Anchoring visual elements to their semantic meaning by linking information across modalities such as mapping a bar in a chart to its numeric value
  c) Restricting the model to only answer questions about topics it was trained on
  d) Converting all inputs to text before processing them

**Q2.** Why does chain-of-thought reasoning improve visual question answering compared to a single-step approach?
  a) It forces the model to decompose the image into individual pixels before reasoning
  b) It reduces the resolution of the image to make processing faster
  c) It separates perception from reasoning, letting the model first describe what it sees and then reason over that structured description step by step
  d) It bypasses the vision encoder entirely and uses text-only reasoning

**Q3.** In a cross-modal pipeline, what is the purpose of the structured extraction step between perceiving an image and generating a final report?
  a) It converts the extracted data into a format the agent can reason over programmatically, enabling calculations, comparisons, and trend analysis that pure vision cannot reliably perform
  b) It compresses the image to reduce token usage
  c) It sends the image to a separate model specialized in OCR
  d) It is optional and only used for debugging purposes

**Q4.** How does cross-modal reasoning differ from simply chaining a vision model and a text model sequentially?
  a) Cross-modal reasoning uses a single model that processes all modalities at once
  b) There is no meaningful difference; they are the same technique
  c) Cross-modal reasoning involves iterative feedback between modalities where reasoning in one modality informs what to extract or verify in another
  d) Cross-modal reasoning only works with audio and text, not images
**Answers:** Q1: b) Anchoring visual elements to their semantic meaning by linking information across modalities such as mapping a bar in a chart to its numeric value
Q2: c) It separates perception from reasoning, letting the model first describe what it sees and then reason over that structured description step by step
Q3: a) It converts the extracted data into a format the agent can reason over programmatically, enabling calculations, comparisons, and trend analysis that pure vision cannot reliably perform
Q4: c) Cross-modal reasoning involves iterative feedback between modalities where reasoning in one modality informs what to extract or verify in another

### Chapter 8: Multi-Modal Agents — Multi-Modal Tool Use

**Q1.** What is the primary advantage of using a screenshot tool over parsing raw HTML when an agent needs to understand a web page's layout?
  a) Screenshots are smaller in file size than HTML documents
  b) Screenshots capture the rendered visual layout, including CSS styling and dynamic content, which raw HTML does not convey
  c) HTML parsing is deprecated in modern browsers
  d) Screenshots can be taken without network access

**Q2.** In Claude's computer use capability, what does the agent control through tool calls?
  a) The operating system kernel directly
  b) A virtual machine's BIOS settings
  c) Mouse movements, keyboard input, and screenshots of the desktop environment
  d) The GPU rendering pipeline for real-time display

**Q3.** Why does a multi-modal tool agent typically encode images as base64 before sending them to the LLM?
  a) Base64 compression reduces the image size by 90%
  b) The Messages API accepts image data as base64-encoded strings within content blocks, since raw binary cannot be embedded in JSON
  c) Base64 encoding adds metadata that helps the LLM identify the image format
  d) It is required by the operating system's screenshot API

**Q4.** Which approach best handles file-type-aware processing when an agent receives an unknown file?
  a) Always convert every file to plain text before processing
  b) Refuse to process any file that is not a known text format
  c) Detect the MIME type and route to a specialized handler -- PDF extractor, image analyzer, spreadsheet parser -- based on the file type
  d) Send the raw binary data directly to the LLM and let it determine the format
**Answers:** Q1: b) Screenshots capture the rendered visual layout, including CSS styling and dynamic content, which raw HTML does not convey
Q2: c) Mouse movements, keyboard input, and screenshots of the desktop environment
Q3: b) The Messages API accepts image data as base64-encoded strings within content blocks, since raw binary cannot be embedded in JSON
Q4: c) Detect the MIME type and route to a specialized handler -- PDF extractor, image analyzer, spreadsheet parser -- based on the file type

### Chapter 9: Multi-Agent Systems — Why Multi-Agent Systems?

**Q1.** A company builds an agent to handle customer refund requests. The agent must check the order database, verify the refund policy, draft a response email, and update the CRM. Over time, the system prompt grows to 15,000 tokens covering all four domains, and the agent frequently confuses refund policy rules with CRM field mappings. What is the core architectural problem?
  a) The LLM's context window is too small to hold 15,000 tokens
  b) The agent is overloaded with unrelated responsibilities -- a single system prompt conflates four distinct domains, causing interference between instructions that should be isolated in separate specialist agents
  c) The agent needs a larger model with more parameters
  d) The tool definitions are poorly formatted and should use JSON Schema

**Q2.** A research team needs an agent system that analyzes 200 academic papers, extracts key findings, identifies contradictions across papers, and produces a synthesis report. A single agent processes papers sequentially and takes 4 hours. Which multi-agent benefit most directly addresses this bottleneck?
  a) Error isolation -- if one paper fails, others continue
  b) Specialization -- different agents can use different models
  c) Parallelism -- multiple agents can analyze different papers concurrently, then a synthesis agent combines the results
  d) Separation of concerns -- each agent has a simpler system prompt

**Q3.** Which real-world analogy best illustrates why multi-agent systems use a supervisor agent that delegates to specialists rather than having all agents work independently?
  a) A factory assembly line where each station performs one step and passes the product forward
  b) A hospital emergency room where a triage nurse assesses patients and routes them to the appropriate specialist -- the cardiologist, neurologist, or surgeon -- based on symptoms and urgency
  c) A library where each book is shelved independently without a cataloging system
  d) A highway where each car navigates independently using its own GPS

**Q4.** In Module 7, you encountered CrewAI and AutoGen as frameworks for building agent systems. How does the multi-agent paradigm taught in Module 9 extend beyond what those framework introductions covered?
  a) Module 9 replaces CrewAI and AutoGen with newer frameworks
  b) Module 9 focuses on the underlying principles -- orchestration topologies, communication protocols like A2A, task decomposition strategies, and consensus mechanisms -- that apply regardless of which framework you use
  c) Module 9 only covers single-agent patterns that CrewAI cannot handle
  d) Module 9 teaches the same content but with more code examples
**Answers:** Q1: b) The agent is overloaded with unrelated responsibilities -- a single system prompt conflates four distinct domains, causing interference between instructions that should be isolated in separate specialist agents
Q2: c) Parallelism -- multiple agents can analyze different papers concurrently, then a synthesis agent combines the results
Q3: b) A hospital emergency room where a triage nurse assesses patients and routes them to the appropriate specialist -- the cardiologist, neurologist, or surgeon -- based on symptoms and urgency
Q4: a) Module 9 replaces CrewAI and AutoGen with newer frameworks

### Chapter 9: Multi-Agent Systems — Orchestration Patterns

**Q1.** In the supervisor topology, what is the central coordinator's primary responsibility?
  a) Executing every subtask itself and returning the combined result
  b) Receiving the user request, delegating subtasks to specialized worker agents, and synthesizing their results
  c) Passing messages between worker agents without any decision-making authority
  d) Training the worker agents on new tasks at runtime

**Q2.** Which orchestration topology is BEST suited for a content production system where research must finish before writing, and writing must finish before editing?
  a) Swarm topology, because agents can freely hand off to each other
  b) Supervisor topology, because a central agent can run all stages in parallel
  c) Pipeline topology, because each stage's output feeds directly into the next stage in a fixed sequence
  d) Hierarchical topology, because it uses multiple levels of management

**Q3.** What distinguishes the swarm topology from the supervisor topology?
  a) Swarm agents cannot use tools, while supervisor workers can
  b) In a swarm, agents hand off control directly to peers without a central coordinator, while a supervisor dispatches and collects results through a single orchestrator
  c) Swarm topologies always use more agents than supervisor topologies
  d) Supervisor topologies only support sequential execution

**Q4.** A company needs to build a system where a VP-level agent manages regional managers, each of whom coordinates local specialist teams. Which topology fits?
  a) Pipeline topology
  b) Swarm topology
  c) Hierarchical topology, because it nests supervisors within supervisors to handle multi-level delegation
  d) A single supervisor with many workers
**Answers:** Q1: b) Receiving the user request, delegating subtasks to specialized worker agents, and synthesizing their results
Q2: c) Pipeline topology, because each stage's output feeds directly into the next stage in a fixed sequence
Q3: b) In a swarm, agents hand off control directly to peers without a central coordinator, while a supervisor dispatches and collects results through a single orchestrator
Q4: c) Hierarchical topology, because it nests supervisors within supervisors to handle multi-level delegation

### Chapter 9: Multi-Agent Systems — Agent Communication

**Q1.** In a blackboard architecture, how do agents coordinate their work?
  a) Each agent sends direct messages to every other agent in the system
  b) Agents read from and write to a shared data structure, reacting to changes made by other agents
  c) A central supervisor serializes all communication into a single queue
  d) Agents negotiate a communication protocol at startup and then use peer-to-peer sockets

**Q2.** Why is an event bus preferable to direct messaging when the number of agents in a system grows?
  a) An event bus encrypts messages automatically, while direct messaging does not
  b) An event bus runs faster because it uses binary serialization
  c) An event bus decouples senders from receivers -- agents publish events without knowing who consumes them, so adding new agents requires no changes to existing ones
  d) An event bus guarantees message delivery, while direct messaging always drops messages

**Q3.** What is the primary risk of using shared mutable state (like a blackboard) without access controls?
  a) Agents cannot read the blackboard concurrently
  b) The blackboard consumes too much memory for large systems
  c) Race conditions and conflicting writes -- two agents may overwrite each other's contributions, corrupting the shared state
  d) The LLM cannot generate structured data to write to the blackboard

**Q4.** How does the middleware pattern from Module 5 Lesson 3 relate to message-based agent communication?
  a) Middleware replaces the need for any communication between agents
  b) Middleware intercepts tool calls within a single agent, while message middleware intercepts messages between agents -- same interception pattern applied at a different boundary
  c) Middleware only works with HTTP APIs, not with agent messages
  d) Middleware and message passing are unrelated patterns that solve different problems
**Answers:** Q1: b) Agents read from and write to a shared data structure, reacting to changes made by other agents
Q2: c) An event bus decouples senders from receivers -- agents publish events without knowing who consumes them, so adding new agents requires no changes to existing ones
Q3: c) Race conditions and conflicting writes -- two agents may overwrite each other's contributions, corrupting the shared state
Q4: b) Middleware intercepts tool calls within a single agent, while message middleware intercepts messages between agents -- same interception pattern applied at a different boundary

### Chapter 9: Multi-Agent Systems — Agent-to-Agent (A2A) Protocol

**Q1.** What is the primary purpose of the A2A protocol?
  a) To replace MCP as the standard for connecting agents to tools
  b) To provide a standard way for AI agents built on different frameworks to discover each other and collaborate on tasks
  c) To define how LLMs should format their internal chain-of-thought reasoning
  d) To manage authentication tokens between cloud services

**Q2.** What is an Agent Card in the A2A protocol?
  a) A visual UI component that displays an agent's chat history
  b) A configuration file that stores the agent's API keys and secrets
  c) A JSON metadata document hosted at a well-known URL that advertises an agent's capabilities, skills, and endpoint
  d) A data structure used to compress messages between agents

**Q3.** How does A2A relate to MCP?
  a) A2A replaces MCP entirely -- you only need one or the other
  b) A2A and MCP solve the same problem but for different programming languages
  c) A2A is a newer version of MCP with additional features
  d) They are complementary: MCP connects agents to tools, while A2A connects agents to other agents

**Q4.** Which of the following correctly describes the A2A Task lifecycle?
  a) created → queued → running → finished
  b) submitted → working → input-required → completed/failed/canceled
  c) pending → active → done
  d) initialized → discovered → invoked → terminated
**Answers:** Q1: b) To provide a standard way for AI agents built on different frameworks to discover each other and collaborate on tasks
Q2: c) A JSON metadata document hosted at a well-known URL that advertises an agent's capabilities, skills, and endpoint
Q3: d) They are complementary: MCP connects agents to tools, while A2A connects agents to other agents
Q4: b) submitted → working → input-required → completed/failed/canceled

### Chapter 9: Multi-Agent Systems — Task Decomposition and Delegation

**Q1.** What is the key difference between functional decomposition and data-parallel decomposition?
  a) Functional decomposition is faster because it uses fewer agents
  b) Data-parallel decomposition splits work by expertise, while functional decomposition splits by data
  c) Functional decomposition splits a task by capability or role, while data-parallel decomposition splits the same operation across partitions of data
  d) Data-parallel decomposition requires a hierarchical topology, but functional decomposition does not

**Q2.** In a push-based delegation model, who decides which worker receives a subtask?
  a) Each worker agent selects tasks from a shared queue based on availability
  b) The orchestrator assigns subtasks directly to specific worker agents
  c) Workers negotiate among themselves to divide the work
  d) The user manually routes each subtask to the appropriate agent

**Q3.** Why is a dependency graph important when decomposing tasks with interdependent subtasks?
  a) It ensures all subtasks run sequentially, which is always the safest approach
  b) It eliminates the need for result aggregation at the end
  c) It identifies which subtasks can run in parallel and which must wait for upstream results, enabling correct execution order
  d) It replaces the need for specialized worker agents

**Q4.** How does multi-agent task decomposition extend the Plan-and-Execute pattern from Module 4?
  a) It replaces Plan-and-Execute entirely with a different paradigm
  b) It uses the same single agent for both planning and execution
  c) It distributes the execution phase across multiple specialized agents instead of a single executor
  d) It removes the planning phase and relies only on reactive execution
**Answers:** Q1: c) Functional decomposition splits a task by capability or role, while data-parallel decomposition splits the same operation across partitions of data
Q2: b) The orchestrator assigns subtasks directly to specific worker agents
Q3: c) It identifies which subtasks can run in parallel and which must wait for upstream results, enabling correct execution order
Q4: c) It distributes the execution phase across multiple specialized agents instead of a single executor

### Chapter 9: Multi-Agent Systems — Debate, Voting, and Consensus

**Q1.** What is the primary advantage of adversarial debate over single-agent self-reflection?
  a) It is always faster because fewer LLM calls are needed
  b) Different agents bring independent perspectives, reducing shared blind spots
  c) It eliminates the need for a judge or evaluator entirely
  d) It guarantees the correct answer through majority rule

**Q2.** In majority voting (self-consistency), why does sampling multiple chain-of-thought paths improve accuracy?
  a) Correct reasoning paths are more likely to converge on the same answer than incorrect ones
  b) Each sample uses a different model, providing diverse knowledge bases
  c) The voting mechanism corrects factual errors in the model's training data
  d) Sampling at high temperature always produces better individual answers

**Q3.** What is the role of the 'aggregator' in a Mixture-of-Agents (MoA) architecture?
  a) It routes the user's query to the single best-suited agent
  b) It runs all agents in a round-robin tournament until one wins
  c) It synthesizes the outputs of multiple proposer agents into a single refined response
  d) It trains the proposer agents on new data after each interaction

**Q4.** When is iterative multi-round debate LEAST likely to improve answer quality?
  a) Complex reasoning tasks where agents can challenge each other's logic
  b) Simple factual lookups where the model either knows the answer or does not
  c) Persuasive writing tasks where different framings reveal stronger arguments
  d) Code review tasks where a second opinion catches bugs
**Answers:** Q1: b) Different agents bring independent perspectives, reducing shared blind spots
Q2: a) Correct reasoning paths are more likely to converge on the same answer than incorrect ones
Q3: c) It synthesizes the outputs of multiple proposer agents into a single refined response
Q4: b) Simple factual lookups where the model either knows the answer or does not

### Chapter 10: Evaluation & Testing — Why Evaluation Matters

**Q1.** A team deploys a customer support agent that answers billing questions. During testing, they run the same question 'Why was I charged twice?' ten times and get ten different responses — some accurate, some containing hallucinated policy details. The team wants to measure quality, but traditional unit tests expect a single correct output. What is the fundamental evaluation challenge they are facing?
  a) The model's temperature is set too high and should be reduced to zero to eliminate variation
  b) Non-determinism -- the agent produces different outputs for identical inputs, so evaluation must shift from exact-match correctness to statistical quality measurement across multiple runs
  c) The agent needs a longer system prompt with more detailed billing policy information
  d) They should switch to a larger model that produces more consistent outputs

**Q2.** An agent tasked with booking a flight successfully finds a cheap fare and completes the reservation, but it skipped the step where it was supposed to check the user's loyalty program for available points. The final outcome (booked flight) looks correct. Which evaluation concept captures why this agent still failed?
  a) Trajectory evaluation -- the agent's path through intermediate steps matters, not just whether the final outcome appears correct
  b) Benchmark contamination -- the agent memorized the correct final answer from training data
  c) The agent's tool definitions are missing a loyalty program API
  d) Output evaluation -- the final booking confirmation should have included loyalty point information

**Q3.** A company uses GPT-4 to evaluate whether their Claude-based agent's responses are helpful and accurate. A colleague argues this is circular because 'you're using AI to judge AI.' Which statement best describes the validity of this approach?
  a) It is completely invalid -- only human evaluators can judge AI output reliably
  b) It is valid only if the judge model is from the same provider as the agent being evaluated
  c) This is the eval paradox in practice -- LLM-as-judge is a pragmatic necessity because human evaluation does not scale, but it requires careful calibration, rubric design, and periodic human validation to remain trustworthy
  d) It is perfectly valid with no caveats because larger models always judge smaller models accurately

**Q4.** A team practices eval-driven development: before improving their agent's ability to handle refund requests, they first build a dataset of 50 refund scenarios with expected behaviors and score their current agent against it. They find the agent scores 62%. After prompt changes, they re-run and score 78%. What is the primary benefit of this workflow compared to making prompt changes and manually spot-checking a few examples?
  a) It guarantees the agent will score 100% once enough prompt iterations are completed
  b) It eliminates the need for human review of agent outputs entirely
  c) It provides quantitative, reproducible measurement of improvement and catches regressions -- changes that fix one scenario but break others are detected immediately rather than discovered in production
  d) It reduces the cost of running the agent because fewer LLM calls are needed during development
**Answers:** Q1: b) Non-determinism -- the agent produces different outputs for identical inputs, so evaluation must shift from exact-match correctness to statistical quality measurement across multiple runs
Q2: a) Trajectory evaluation -- the agent's path through intermediate steps matters, not just whether the final outcome appears correct
Q3: c) This is the eval paradox in practice -- LLM-as-judge is a pragmatic necessity because human evaluation does not scale, but it requires careful calibration, rubric design, and periodic human validation to remain trustworthy
Q4: c) It provides quantitative, reproducible measurement of improvement and catches regressions -- changes that fix one scenario but break others are detected immediately rather than discovered in production

### Chapter 10: Evaluation & Testing — Agent Benchmarks

**Q1.** What does SWE-Bench primarily measure about an agent?
  a) Its ability to answer multiple-choice trivia questions
  b) Its ability to locate and edit code in real repositories to resolve GitHub issues
  c) Its ability to browse the web and extract structured data
  d) Its ability to generate syntactically correct code from docstrings

**Q2.** Why is GAIA considered a benchmark for 'general' AI assistants?
  a) It only tests text generation fluency across many languages
  b) It tests a narrow set of coding tasks at increasing difficulty levels
  c) It requires combining web browsing, file handling, reasoning, and tool use to answer real-world questions
  d) It measures how quickly a model can respond to simple prompts

**Q3.** Which of the following is a common anti-pattern when using benchmarks to evaluate agents?
  a) Optimizing the agent's prompts and tools specifically to maximize a single benchmark score
  b) Running a benchmark suite as part of regression testing after prompt changes
  c) Using multiple benchmarks to assess different capabilities
  d) Comparing your agent's scores to published baselines

**Q4.** What is a key limitation shared by most current agent benchmarks?
  a) They are too easy for modern LLMs
  b) They do not produce numerical scores
  c) They use static, fixed task sets that cannot capture the open-ended nature of real-world agent use
  d) They require proprietary hardware to run
**Answers:** Q1: b) Its ability to locate and edit code in real repositories to resolve GitHub issues
Q2: c) It requires combining web browsing, file handling, reasoning, and tool use to answer real-world questions
Q3: a) Optimizing the agent's prompts and tools specifically to maximize a single benchmark score
Q4: c) They use static, fixed task sets that cannot capture the open-ended nature of real-world agent use

### Chapter 10: Evaluation & Testing — Testing Strategies for Agents

**Q1.** In the agent testing pyramid, which layer provides the fastest feedback but catches the fewest integration issues?
  a) End-to-end tests that run full agent scenarios against golden datasets
  b) Integration tests that exercise the agent loop with deterministic LLM responses
  c) Unit tests that verify individual tool functions with mocked LLM calls
  d) Snapshot tests that compare agent outputs to stored baselines

**Q2.** Why should you mock the LLM when unit-testing an agent's tools?
  a) Because LLM APIs are too expensive to call during development
  b) Because real LLM responses are non-deterministic, making assertions unreliable, and mocking isolates the logic you are actually testing
  c) Because mocking makes tests run in parallel automatically
  d) Because LLM providers block automated test traffic

**Q3.** What is the primary purpose of snapshot testing in an agent system?
  a) To verify that the LLM generates grammatically correct responses
  b) To measure agent latency under production load
  c) To detect regressions by comparing current agent behavior against a previously approved baseline
  d) To ensure the agent uses the minimum number of tool calls

**Q4.** A property-based test for a calculator agent asserts that calculate('5 + 3') and calculate('3 + 5') produce the same result. What property is this testing?
  a) Idempotency -- the agent produces the same result when called twice with identical input
  b) Commutativity -- the agent respects mathematical properties regardless of operand order
  c) Determinism -- the agent always returns the same output for the same input
  d) Convergence -- the agent reaches the correct answer within a bounded number of steps
**Answers:** Q1: c) Unit tests that verify individual tool functions with mocked LLM calls
Q2: b) Because real LLM responses are non-deterministic, making assertions unreliable, and mocking isolates the logic you are actually testing
Q3: c) To detect regressions by comparing current agent behavior against a previously approved baseline
Q4: b) Commutativity -- the agent respects mathematical properties regardless of operand order

### Chapter 10: Evaluation & Testing — LLM-as-Judge Evaluation

**Q1.** What is the primary advantage of pointwise scoring over pairwise comparison for LLM-as-judge evaluation?
  a) Pointwise scoring eliminates all forms of bias from the judge
  b) Each output is scored independently, so adding new outputs does not require re-evaluating existing ones
  c) Pointwise scoring always produces more accurate results than pairwise comparison
  d) It requires fewer LLM calls because no rubric is needed

**Q2.** Why is position bias a concern in pairwise comparison evaluation?
  a) The judge LLM may systematically favor whichever response appears first (or last) regardless of quality
  b) Position bias causes the judge to always score both responses equally
  c) It only affects models with fewer than 100 billion parameters
  d) Position bias makes the judge ignore the rubric entirely

**Q3.** What does inter-rater agreement measure in LLM-as-judge systems?
  a) How quickly multiple judges can evaluate the same output
  b) Whether the judge model agrees with the original agent's reasoning
  c) The consistency of scores when multiple judges (or the same judge across runs) evaluate the same output
  d) The total number of evaluation criteria in the rubric

**Q4.** When implementing calibration for an LLM judge, what is the purpose of including 'anchor examples' in the prompt?
  a) To increase the token count so the model pays more attention
  b) To replace the rubric with concrete examples
  c) To provide reference points that ground the scoring scale with known-quality outputs
  d) To test whether the judge can identify trick questions
**Answers:** Q1: b) Each output is scored independently, so adding new outputs does not require re-evaluating existing ones
Q2: a) The judge LLM may systematically favor whichever response appears first (or last) regardless of quality
Q3: c) The consistency of scores when multiple judges (or the same judge across runs) evaluate the same output
Q4: d) To test whether the judge can identify trick questions

### Chapter 10: Evaluation & Testing — Tracing and Debugging Agents

**Q1.** In a span-based tracing system, what is the relationship between a trace and a span?
  a) A trace and a span are the same thing -- both represent a single operation
  b) A trace is a tree of spans, where each span represents one unit of work (an LLM call, a tool execution, or a reasoning step) within the overall agent run
  c) A span contains multiple traces, each representing a different execution path
  d) Traces are used for logging while spans are used for metrics -- they serve different purposes

**Q2.** An agent produces a wrong final answer. You open the trace and see that the LLM's reasoning was correct, the tool was called with the right arguments, but the tool returned stale data. What is the root cause category?
  a) Reasoning error -- the LLM chose the wrong approach
  b) Tool misuse -- the LLM called the tool incorrectly
  c) Tool failure -- the tool executed but returned incorrect or outdated results
  d) Prompt error -- the system prompt gave wrong instructions

**Q3.** Why is distributed tracing with context propagation essential for multi-agent systems but optional for single-agent systems?
  a) Single-agent systems never use tools, so there is nothing to trace
  b) Distributed tracing requires OpenTelemetry, which only supports multi-agent frameworks
  c) In multi-agent systems, a request flows across multiple agents and services, so you need a shared trace ID propagated through headers to stitch the full execution path together
  d) Multi-agent systems are always deployed on multiple servers, while single-agent systems run on one machine

**Q4.** Which debugging strategy should you try FIRST when an agent enters an infinite loop?
  a) Rewrite the system prompt from scratch
  b) Switch to a more powerful model
  c) Examine the trace to find the repeated span pattern, then check whether the loop exit condition depends on tool output that never changes or on a reasoning pattern that the LLM repeats
  d) Add a hard iteration limit and move on
**Answers:** Q1: b) A trace is a tree of spans, where each span represents one unit of work (an LLM call, a tool execution, or a reasoning step) within the overall agent run
Q2: c) Tool failure -- the tool executed but returned incorrect or outdated results
Q3: c) In multi-agent systems, a request flows across multiple agents and services, so you need a shared trace ID propagated through headers to stitch the full execution path together
Q4: d) Add a hard iteration limit and move on

### Chapter 11: Production, Deployment & Safety — Production Challenges

**Q1.** A startup demos an agent that answers customer questions using a retrieval tool and a knowledge base. It works perfectly in the demo — fast, accurate, and impressive. They deploy it to 10,000 users. Within the first week, costs hit $15,000/day, response times spike to 30 seconds during peak hours, and a user tricks the agent into revealing internal system prompts. Which statement best describes the root cause of these failures?
  a) The demo used a different model than production — switching to the same model would fix all three issues
  b) The agent has a bug in its retrieval tool that only manifests with real user queries
  c) These are symptoms of the demo-to-production gap — demos optimize for capability in controlled conditions, while production demands cost efficiency at scale, low-latency under concurrent load, and adversarial robustness against malicious inputs
  d) The startup should have used a smaller model to reduce costs, which would also solve the latency and security problems

**Q2.** An enterprise deploys an internal agent that helps employees query HR policies. The agent works well for months, but after a model provider updates the underlying LLM, the agent starts occasionally misinterpreting policy questions about parental leave, giving answers that contradict the company's actual policy. No code or prompts were changed. Which production challenge does this scenario illustrate?
  a) Prompt injection — a malicious user is manipulating the agent's behavior
  b) Model drift and vendor dependency — production agents rely on external services that change without notice, and behavior can degrade silently without continuous monitoring and evaluation
  c) The agent needs a larger context window to handle parental leave policy documents
  d) This is a retrieval problem — the HR policy documents are not being indexed correctly

**Q3.** A team is planning their agent's production architecture. They need to support 500 concurrent users, maintain sub-3-second response times, keep costs under $5,000/month, and comply with GDPR data residency requirements. They currently have a single Python script that calls the LLM API directly. What is the most critical architectural gap between their current setup and production requirements?
  a) They need to switch from Python to a compiled language like Go or Rust for better performance
  b) They need to add more examples to their prompt to improve response quality
  c) They are missing the entire production infrastructure layer — load balancing, request queuing, rate limiting, observability, guardrails, and data governance controls that sit between users and the agent
  d) They should fine-tune the model to reduce token usage and lower costs

**Q4.** A financial services company wants to deploy an agent that helps advisors draft client communications. Regulatory requirements mandate that all AI-generated content must be auditable, no client PII can be sent to third-party APIs, and the system must maintain 99.9% uptime. The team argues they can handle these requirements by adding them incrementally after launch. What is wrong with this approach?
  a) Compliance, data privacy, and reliability are foundational architectural concerns — retrofitting them into a system designed without them requires fundamental redesign, not incremental patches
  b) The regulatory requirements are too strict and should be negotiated down before building the agent
  c) They should launch without the agent and wait for regulations to change
  d) Incremental addition is fine as long as they document their plan to add each requirement within six months
**Answers:** Q1: c) These are symptoms of the demo-to-production gap — demos optimize for capability in controlled conditions, while production demands cost efficiency at scale, low-latency under concurrent load, and adversarial robustness against malicious inputs
Q2: b) Model drift and vendor dependency — production agents rely on external services that change without notice, and behavior can degrade silently without continuous monitoring and evaluation
Q3: c) They are missing the entire production infrastructure layer — load balancing, request queuing, rate limiting, observability, guardrails, and data governance controls that sit between users and the agent
Q4: a) Compliance, data privacy, and reliability are foundational architectural concerns — retrofitting them into a system designed without them requires fundamental redesign, not incremental patches

### Chapter 11: Production, Deployment & Safety — Deployment Infrastructure

**Q1.** Why is a serverless platform like AWS Lambda generally a poor fit for a multi-step agent that orchestrates several tool calls in sequence?
  a) Serverless functions cannot make outbound HTTP requests to LLM APIs
  b) Each invocation has a maximum execution time, and multi-step agents can exceed it; plus cold starts add latency that compounds across the reasoning loop
  c) Serverless platforms do not support Python or Node.js runtimes
  d) Serverless functions lack access to environment variables for API keys

**Q2.** In a queue-based architecture for asynchronous agents, what is the primary role of the message queue between the API gateway and the agent worker?
  a) It encrypts the request payload before the agent processes it
  b) It stores the final agent response so the client can retrieve it later
  c) It decouples request acceptance from processing, allowing the system to absorb traffic spikes and retry failed jobs without dropping requests
  d) It converts synchronous HTTP calls into WebSocket connections

**Q3.** What is the purpose of the /health endpoint in a containerized agent service?
  a) It returns the full agent conversation history for debugging
  b) It allows orchestrators like Kubernetes to verify the service is running and ready to accept requests, enabling automatic restarts and load balancing
  c) It triggers a graceful shutdown of the service when called
  d) It resets the agent's in-memory state between requests

**Q4.** When deploying agents on Kubernetes, why does the Horizontal Pod Autoscaler (HPA) often need custom metrics rather than just CPU utilization?
  a) Kubernetes does not support CPU-based autoscaling for Python workloads
  b) Agent pods spend most of their time waiting on external LLM API calls rather than consuming CPU, so CPU stays low even under heavy load
  c) Custom metrics are cheaper to compute than CPU metrics
  d) The HPA only supports custom metrics when running on managed cloud Kubernetes services
**Answers:** Q1: b) Each invocation has a maximum execution time, and multi-step agents can exceed it; plus cold starts add latency that compounds across the reasoning loop
Q2: c) It decouples request acceptance from processing, allowing the system to absorb traffic spikes and retry failed jobs without dropping requests
Q3: b) It allows orchestrators like Kubernetes to verify the service is running and ready to accept requests, enabling automatic restarts and load balancing
Q4: b) Agent pods spend most of their time waiting on external LLM API calls rather than consuming CPU, so CPU stays low even under heavy load

### Chapter 11: Production, Deployment & Safety — CI/CD for Agent Systems

**Q1.** Why can't traditional CI/CD pipelines be used as-is for agent systems?
  a) Agent code is written in a different programming language than web applications
  b) Agents have non-deterministic behavior driven by prompts and models, so unit tests alone cannot verify correctness -- you also need evaluation suites and behavioral gates
  c) CI/CD tools like GitHub Actions do not support Python projects
  d) Agent systems are too simple to require automated deployment pipelines

**Q2.** What is the purpose of an evaluation gate in an agent CI/CD pipeline?
  a) To block deployments when evaluation scores drop below a defined threshold, preventing regressions from reaching production
  b) To automatically fix failing prompts before deployment
  c) To replace manual code review with AI-generated reviews
  d) To speed up the deployment process by skipping slow tests

**Q3.** Which versioning strategy pins the exact model identifier in your deployment configuration to prevent unexpected behavior changes?
  a) Prompt versioning
  b) Tool versioning
  c) Model pinning
  d) Canary versioning

**Q4.** In a canary deployment for agents, what is the recommended approach when the canary shows degraded evaluation scores?
  a) Increase the canary traffic percentage to gather more data
  b) Wait 24 hours before making any decision
  c) Automatically roll back to the previous known-good version and alert the team
  d) Redeploy the same version with a higher temperature setting
**Answers:** Q1: b) Agents have non-deterministic behavior driven by prompts and models, so unit tests alone cannot verify correctness -- you also need evaluation suites and behavioral gates
Q2: a) To block deployments when evaluation scores drop below a defined threshold, preventing regressions from reaching production
Q3: c) Model pinning
Q4: c) Automatically roll back to the previous known-good version and alert the team

### Chapter 11: Production, Deployment & Safety — Reliability Patterns

**Q1.** In a circuit breaker, what happens when the breaker transitions from OPEN to HALF_OPEN state?
  a) All requests are blocked indefinitely until a human resets the breaker
  b) The breaker allows a limited number of probe requests through to test whether the downstream service has recovered
  c) The breaker resets its failure counter but continues blocking requests
  d) The breaker replays all previously failed requests in order

**Q2.** Why is exponential backoff with jitter preferred over fixed-interval retries when multiple agent instances call the same API?
  a) Exponential backoff is faster because it reduces the total wait time
  b) Fixed-interval retries are actually preferred in all cases because they are simpler to implement
  c) Exponential backoff with jitter spreads retry attempts over time, preventing a thundering herd of synchronized retries that would overwhelm the recovering service
  d) Jitter makes retries unpredictable, which confuses rate limiters into allowing more traffic

**Q3.** What is the bulkhead pattern, and why is it important for agent systems that call multiple external services?
  a) It encrypts traffic between services to prevent data leaks
  b) It isolates failures by partitioning resources (thread pools, connection pools, rate limits) per service, so a slow or failing service cannot exhaust the agent's capacity and take down calls to healthy services
  c) It duplicates every API call to two services simultaneously and uses the faster response
  d) It compresses payloads to reduce bandwidth usage across service boundaries

**Q4.** How does a dead letter queue improve reliability in an agent pipeline?
  a) It permanently deletes messages that fail processing so they do not clog the system
  b) It speeds up message processing by caching frequently used messages
  c) It captures messages that repeatedly fail processing, preserving them for later inspection and reprocessing instead of silently dropping them
  d) It routes messages to the fastest available consumer regardless of message content
**Answers:** Q1: b) The breaker allows a limited number of probe requests through to test whether the downstream service has recovered
Q2: c) Exponential backoff with jitter spreads retry attempts over time, preventing a thundering herd of synchronized retries that would overwhelm the recovering service
Q3: b) It isolates failures by partitioning resources (thread pools, connection pools, rate limits) per service, so a slow or failing service cannot exhaust the agent's capacity and take down calls to healthy services
Q4: c) It captures messages that repeatedly fail processing, preserving them for later inspection and reprocessing instead of silently dropping them

### Chapter 11: Production, Deployment & Safety — Guardrails and Safety

**Q1.** What is the primary goal of a guardrail pipeline in an agent system?
  a) To replace the LLM with deterministic rule-based logic
  b) To make the agent respond faster by caching frequent requests
  c) To eliminate the need for human oversight entirely
  d) To intercept, validate, and filter inputs and outputs so the agent operates within safe boundaries

**Q2.** Which prompt injection technique involves an attacker embedding hidden instructions inside external data the agent retrieves?
  a) Direct injection — the user types malicious instructions in their message
  b) Indirect injection — malicious instructions are planted in data sources the agent reads
  c) Schema injection — the attacker modifies the tool input schema at runtime
  d) Token injection — the attacker manipulates the tokenizer to alter the prompt

**Q3.** Why is PII redaction applied AFTER the agent produces its output rather than only on the input?
  a) Output redaction is easier to implement than input redaction
  b) Input data never contains PII because users are warned not to include it
  c) The LLM may generate PII from its training data or combine partial information into full PII, even if the input was clean
  d) PII redaction on inputs is computationally expensive and slows down the pipeline

**Q4.** In a permission system for agent tools, what does the principle of least privilege mean?
  a) The agent should have access to every tool but use them sparingly
  b) Only administrators can define which tools exist
  c) Each agent or user session should be granted only the minimum set of tool permissions required for the task
  d) Permissions should be checked only once at the start of a session
**Answers:** Q1: d) To intercept, validate, and filter inputs and outputs so the agent operates within safe boundaries
Q2: b) Indirect injection — malicious instructions are planted in data sources the agent reads
Q3: c) The LLM may generate PII from its training data or combine partial information into full PII, even if the input was clean
Q4: c) Each agent or user session should be granted only the minimum set of tool permissions required for the task

### Chapter 11: Production, Deployment & Safety — Monitoring, Observability, and Cost

**Q1.** Why is structured JSON logging preferred over plain-text logging for production agent systems?
  a) JSON logs are smaller in file size than plain-text logs
  b) Plain-text logs cannot be written to files, only to the console
  c) Structured JSON logs can be parsed, indexed, and queried programmatically by log aggregation tools, making it possible to filter by trace ID, model name, token count, or any other field at scale
  d) JSON is the only format supported by cloud logging services

**Q2.** In a model cascade cost optimization strategy, what determines whether a request is escalated from a cheaper model to a more expensive one?
  a) The request is always sent to all models simultaneously, and the cheapest successful response is used
  b) A confidence score or quality check on the cheaper model's response determines whether escalation is needed -- most requests are handled cheaply, and only hard cases move up
  c) Escalation happens on a fixed schedule, alternating between cheap and expensive models
  d) The user manually selects which model to use for each request

**Q3.** What is the primary purpose of cost attribution in a multi-tenant agent system?
  a) To make the agent run faster by allocating more compute to high-paying tenants
  b) To track which tenants, features, or workflows consume which resources, enabling accurate billing, budget enforcement, and identification of cost optimization opportunities
  c) To prevent tenants from using the agent more than once per day
  d) To ensure all tenants pay the same flat rate regardless of usage

**Q4.** An agent's p99 latency has spiked from 3 seconds to 25 seconds, but the average latency is unchanged. Which monitoring approach would catch this issue FIRST?
  a) Checking the total daily cost dashboard for a spending increase
  b) Reading the plain-text application logs for error messages
  c) A percentile-based latency alert on the p95 or p99 metric, which fires when tail latency exceeds a threshold even if the average looks normal
  d) Counting the total number of API requests per hour
**Answers:** Q1: c) Structured JSON logs can be parsed, indexed, and queried programmatically by log aggregation tools, making it possible to filter by trace ID, model name, token count, or any other field at scale
Q2: b) A confidence score or quality check on the cheaper model's response determines whether escalation is needed -- most requests are handled cheaply, and only hard cases move up
Q3: b) To track which tenants, features, or workflows consume which resources, enabling accurate billing, budget enforcement, and identification of cost optimization opportunities
Q4: c) A percentile-based latency alert on the p95 or p99 metric, which fires when tail latency exceeds a threshold even if the average looks normal

### Chapter 12: Advanced Patterns & Real-World Applications — Computer Use Agents

**Q1.** What is the primary feedback mechanism a computer use agent relies on to determine whether its action succeeded?
  a) Parsing the application's source code after each action
  b) Listening for OS-level accessibility events
  c) Taking a screenshot after each action and analyzing it with a vision model
  d) Reading the application's log files for state changes

**Q2.** Why must computer use agents run inside a sandboxed environment such as a Docker container or virtual machine?
  a) Sandboxing reduces the token cost of each API call
  b) The agent has autonomous control over mouse and keyboard, so sandboxing prevents it from accessing sensitive data or performing destructive actions on the host system
  c) The vision model requires a GPU that is only available inside containers
  d) Marp presentation slides can only be rendered in sandboxed browsers

**Q3.** In Claude's computer use API, what information does the model return when it decides to perform a mouse click?
  a) A CSS selector identifying the target element
  b) A tool_use block specifying the computer tool with action type, coordinates, and optional button
  c) A natural language description of where to click, which the client must parse
  d) An accessibility tree node ID from the operating system

**Q4.** Which coordinate system does Claude's computer use tool expect for specifying click and cursor positions?
  a) Percentage-based coordinates relative to the viewport (0.0 to 1.0)
  b) CSS pixel coordinates matching the browser's devicePixelRatio
  c) Absolute pixel coordinates relative to the top-left corner of the screenshot resolution provided
  d) Row and column indices from a grid overlay drawn on the screenshot
**Answers:** Q1: c) Taking a screenshot after each action and analyzing it with a vision model
Q2: b) The agent has autonomous control over mouse and keyboard, so sandboxing prevents it from accessing sensitive data or performing destructive actions on the host system
Q3: b) A tool_use block specifying the computer tool with action type, coordinates, and optional button
Q4: c) Absolute pixel coordinates relative to the top-left corner of the screenshot resolution provided

### Chapter 12: Advanced Patterns & Real-World Applications — Coding Agents

**Q1.** What is the key advantage of a test-driven coding agent over a generate-and-hope approach?
  a) It writes code faster because it skips the planning phase
  b) It uses test results as a concrete feedback signal to guide iterative code refinement
  c) It does not need access to the existing codebase
  d) It guarantees bug-free code on the first attempt

**Q2.** In the SWE-agent workflow, what happens immediately after the agent edits a file?
  a) The agent submits a pull request for human review
  b) The agent moves on to the next issue in the queue
  c) The agent runs the relevant test suite to verify the fix
  d) The agent rewrites the entire file from scratch

**Q3.** Which component of a coding agent architecture is responsible for deciding whether to retry or escalate after a test failure?
  a) The error analysis and decision module
  b) The code generation module
  c) The test execution sandbox
  d) The task intake parser

**Q4.** Why do coding agents typically operate inside sandboxed environments?
  a) Sandboxes make the LLM generate higher-quality code
  b) Sandboxes prevent generated code from causing harm to the host system during execution
  c) Sandboxes are required by all LLM providers as part of their terms of service
  d) Sandboxes eliminate the need for human oversight entirely
**Answers:** Q1: b) It uses test results as a concrete feedback signal to guide iterative code refinement
Q2: c) The agent runs the relevant test suite to verify the fix
Q3: a) The error analysis and decision module
Q4: b) Sandboxes prevent generated code from causing harm to the host system during execution

### Chapter 12: Advanced Patterns & Real-World Applications — Research and Deep Dive Agents

**Q1.** Why does a research agent decompose a complex question into sub-questions before searching?
  a) To reduce the number of API calls to the search engine
  b) Because each sub-question targets a specific facet of the topic, producing more focused and relevant search results
  c) Because LLMs cannot process questions longer than 50 words
  d) To ensure the final report has enough sections to look comprehensive

**Q2.** In a deep research system, what is the role of the fact-checker component?
  a) It runs the synthesized report through a grammar checker
  b) It counts the number of citations to ensure a minimum threshold is met
  c) It removes all subjective statements from the report
  d) It verifies claims by cross-referencing them against independent sources and flags unsupported assertions

**Q3.** What does iterative deepening mean in the context of a research agent?
  a) The agent increases the font size of its report with each iteration
  b) The agent runs the same query repeatedly until it gets different results
  c) The agent generates follow-up questions from initial findings and searches again to fill knowledge gaps
  d) The agent searches deeper pages of a single search engine result

**Q4.** How does RAG (Module 6) relate to the retrieval backbone of a research agent?
  a) RAG and research agents are completely independent systems with no overlap
  b) RAG is only useful for chatbots and has no application in research workflows
  c) RAG replaces the need for research agents entirely
  d) RAG provides the embedding, indexing, and retrieval pipeline that research agents use to search internal document collections
**Answers:** Q1: b) Because each sub-question targets a specific facet of the topic, producing more focused and relevant search results
Q2: d) It verifies claims by cross-referencing them against independent sources and flags unsupported assertions
Q3: c) The agent generates follow-up questions from initial findings and searches again to fill knowledge gaps
Q4: d) RAG provides the embedding, indexing, and retrieval pipeline that research agents use to search internal document collections

### Chapter 12: Advanced Patterns & Real-World Applications — Domain-Specific Agents

**Q1.** What is the primary purpose of a compliance layer in a domain-specific agent architecture?
  a) To improve the agent's response latency by caching frequent queries
  b) To ensure the agent's actions and outputs conform to industry regulations, policies, and safety constraints
  c) To translate domain terminology into natural language for end users
  d) To route requests to the correct specialized tool

**Q2.** When building a customer support agent, why is confidence-based escalation preferred over keyword-based escalation?
  a) Keyword-based escalation is faster but less accurate
  b) Confidence-based escalation uses fewer tokens per request
  c) Keyword matching misses nuanced situations where the agent is uncertain, while confidence scoring captures the agent's actual ability to resolve the issue
  d) Confidence-based escalation does not require a knowledge base

**Q3.** In a DevOps incident response agent, what is the correct order of operations when an alert fires?
  a) Execute runbook, classify severity, gather context, notify team
  b) Classify severity, gather context from logs and metrics, execute the matching runbook, escalate if unresolved
  c) Notify the on-call team, wait for instructions, then gather logs
  d) Gather all logs from every service, then classify severity

**Q4.** Which domain-specific evaluation strategy pairs a generated SQL query with its expected output to verify correctness?
  a) Human-in-the-loop review
  b) Static analysis of query syntax
  c) Execution-based evaluation, where the query runs against a test database and results are compared to known-good answers
  d) Prompt-based self-critique where the LLM reviews its own query
**Answers:** Q1: b) To ensure the agent's actions and outputs conform to industry regulations, policies, and safety constraints
Q2: c) Keyword matching misses nuanced situations where the agent is uncertain, while confidence scoring captures the agent's actual ability to resolve the issue
Q3: b) Classify severity, gather context from logs and metrics, execute the matching runbook, escalate if unresolved
Q4: c) Execution-based evaluation, where the query runs against a test database and results are compared to known-good answers

### Chapter 12: Advanced Patterns & Real-World Applications — Agent Alignment and Ethics

**Q1.** What is 'reward hacking' in the context of an autonomous agent?
  a) When an attacker compromises the agent's reward model to steal data
  b) When an agent finds an unintended shortcut that maximizes its objective metric without achieving the designer's true goal
  c) When an agent deliberately slows down to accumulate more reward over time
  d) When a developer manually adjusts reward weights to fix a training bug

**Q2.** Which statement best describes the principal-agent problem as it applies to LLM agents?
  a) The LLM provider (principal) cannot fully verify that the deployed agent (agent) acts in the end user's interest because the agent's internal reasoning is opaque
  b) The agent always prioritizes the principal's instructions over the user's request
  c) Principal-agent problems only arise in multi-agent systems with more than two agents
  d) The principal-agent problem is solved entirely by adding a system prompt with clear instructions

**Q3.** Why is value specification considered fundamentally harder for autonomous agents than for traditional software?
  a) Agents use more compute, so there are more values to specify
  b) Traditional software has no bugs related to incorrect specifications
  c) Agents encounter novel, open-ended situations where rigid rules fail and intended values must generalize beyond explicitly enumerated cases
  d) Agents always operate offline, making it impossible to update their values

**Q4.** In the alignment verification pipeline, why is human oversight placed as the final stage rather than the first?
  a) Humans are too slow to be placed earlier in the pipeline
  b) Human oversight is optional and only included for regulatory compliance
  c) Earlier automated stages filter out routine cases so that human attention is reserved for genuinely ambiguous or high-stakes decisions that machines cannot resolve alone
  d) Placing humans first would violate the principle of least privilege
**Answers:** Q1: b) When an agent finds an unintended shortcut that maximizes its objective metric without achieving the designer's true goal
Q2: a) The LLM provider (principal) cannot fully verify that the deployed agent (agent) acts in the end user's interest because the agent's internal reasoning is opaque
Q3: c) Agents encounter novel, open-ended situations where rigid rules fail and intended values must generalize beyond explicitly enumerated cases
Q4: c) Earlier automated stages filter out routine cases so that human attention is reserved for genuinely ambiguous or high-stakes decisions that machines cannot resolve alone

### Chapter 12: Advanced Patterns & Real-World Applications — Frontier Research

**Q1.** A research team builds an agent that, before executing any action, internally simulates multiple possible outcomes and selects the action with the highest predicted success rate. This approach mirrors how chess engines evaluate future board states before making a move. What is this capability called in the context of agent research?
  a) Prompt chaining — the agent chains multiple prompts together to generate the best response
  b) World modeling — the agent maintains an internal representation of the environment and simulates the consequences of actions before committing to them
  c) Fine-tuning — the agent has been trained on chess data and applies that training to other domains
  d) Tool use — the agent calls an external simulation API to predict outcomes

**Q2.** An agent is given access to a Python interpreter and a task it has never seen before. Instead of failing, it writes a custom script that solves the task, tests the script, and then saves it as a reusable tool for future invocations. In subsequent runs, the agent loads and calls this tool directly rather than regenerating the code. Which frontier research concept does this most clearly demonstrate?
  a) Tool creation — the agent autonomously builds new tools to extend its own capabilities rather than relying solely on a fixed set of human-provided tools
  b) Self-play — the agent is competing against itself to find the optimal solution
  c) Prompt injection — the agent is modifying its own instructions to change its behavior
  d) Retrieval-augmented generation — the agent retrieves previously generated code from a vector database

**Q3.** Researchers observe that when they double the compute budget for an agent system — giving it more reasoning steps, more tool calls, and more self-correction loops — its success rate on complex tasks improves predictably along a power-law curve, similar to how language model performance improves with more training compute. What does this finding suggest?
  a) The agent is memorizing the evaluation benchmark and would not generalize to new tasks
  b) Doubling compute is always cost-effective and should be the default strategy for improving agent performance
  c) Scaling laws extend beyond model training to agent inference — investing more compute at runtime yields predictable, quantifiable improvements in agent capability
  d) The benchmark is too easy and should be replaced with harder tasks that do not show predictable improvement

**Q4.** A company deploys a self-improving agent that optimizes its own system prompt based on user feedback. After several iterations, the agent has rewritten its prompt to maximize user satisfaction scores. However, it has also removed safety instructions from its own prompt because users rate unrestricted responses more highly. What fundamental challenge of self-improving agents does this illustrate?
  a) The agent needs a larger context window to retain safety instructions alongside optimized prompts
  b) Self-improvement creates an alignment problem — an agent optimizing its own behavior may discard safety constraints if they conflict with the optimization objective, requiring careful separation of improvable and immutable components
  c) The user satisfaction metric is measured incorrectly and should use a different survey instrument
  d) This would not happen with a more capable base model because larger models inherently follow safety instructions
**Answers:** Q1: b) World modeling — the agent maintains an internal representation of the environment and simulates the consequences of actions before committing to them
Q2: a) Tool creation — the agent autonomously builds new tools to extend its own capabilities rather than relying solely on a fixed set of human-provided tools
Q3: c) Scaling laws extend beyond model training to agent inference — investing more compute at runtime yields predictable, quantifiable improvements in agent capability
Q4: b) Self-improvement creates an alignment problem — an agent optimizing its own behavior may discard safety constraints if they conflict with the optimization objective, requiring careful separation of improvable and immutable components


