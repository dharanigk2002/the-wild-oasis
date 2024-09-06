import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rkfnrkjnwijopilkojot.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZm5ya2pud2lqb3BpbGtvam90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxNjkzOTgsImV4cCI6MjA0MDc0NTM5OH0.h2mv7eCGTg_9piqY7XdZdx2MM9qdlf2vj-27v1-A4yk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
