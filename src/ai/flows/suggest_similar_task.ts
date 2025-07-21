'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting similar tasks
 * based on a given task description.
 *
 * @remarks
 * The flow takes a task description as input and returns a list of similar
 * tasks based on the content of existing tasks. This helps prevent the
 * creation of duplicate tasks.
 *
 * @interface SuggestSimilarTasksInput - The input type for the
 *   `suggestSimilarTasks` function.
 * @interface SuggestSimilarTasksOutput - The output type for the
 *   `suggestSimilarTasks` function.
 *
 * @function suggestSimilarTasks - A function that takes
 *   `SuggestSimilarTasksInput` and returns a `Promise` that resolves to
 *   `SuggestSimilarTasksOutput`.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSimilarTasksInputSchema = z.object({
  taskDescription: z
    .string()
    .describe('The description of the task to find similar tasks for.'),
  existingTasks: z
    .array(z.string())
    .describe('A list of existing task descriptions.'),
});
export type SuggestSimilarTasksInput = z.infer<typeof SuggestSimilarTasksInputSchema>;

const SuggestSimilarTasksOutputSchema = z.object({
  similarTasks: z
    .array(z.string())
    .describe('A list of similar task descriptions.'),
});
export type SuggestSimilarTasksOutput = z.infer<typeof SuggestSimilarTasksOutputSchema>;

export async function suggestSimilarTasks(
  input: SuggestSimilarTasksInput
): Promise<SuggestSimilarTasksOutput> {
  return suggestSimilarTasksFlow(input);
}

const suggestSimilarTasksPrompt = ai.definePrompt({
  name: 'suggestSimilarTasksPrompt',
  input: {schema: SuggestSimilarTasksInputSchema},
  output: {schema: SuggestSimilarTasksOutputSchema},
  prompt: `You are a task management assistant. Given a new task description
  and a list of existing task descriptions, identify which of the existing
  tasks are similar to the new task. Return only the similar task
  descriptions in an array. If there are no similar tasks, return an empty
  array.

  New Task Description:
  {{taskDescription}}

  Existing Tasks:
  {{#each existingTasks}}
  - {{this}}
  {{/each}}
  `,
});

const suggestSimilarTasksFlow = ai.defineFlow(
  {
    name: 'suggestSimilarTasksFlow',
    inputSchema: SuggestSimilarTasksInputSchema,
    outputSchema: SuggestSimilarTasksOutputSchema,
  },
  async input => {
    const {output} = await suggestSimilarTasksPrompt(input);
    return output!;
  }
);
