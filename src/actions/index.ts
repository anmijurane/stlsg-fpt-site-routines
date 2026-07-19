import { CreateDemographic } from "./demographic/create.action";
import { CreateFeedbackRoutineExercise } from "./feedback-routine-exercise/create.action";
import { CreateFeedback } from "./feedback/create.action";
import { UpdateCommentFeedback } from "./feedback/update.action";

export const server = {
  CreateFeedback,
  UpdateCommentFeedback,
  CreateDemographic,
  CreateFeedbackRoutineExercise
}
