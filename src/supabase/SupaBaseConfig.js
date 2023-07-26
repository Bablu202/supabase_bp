import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kxordvvtoafqkttqjbxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4b3JkdnZ0b2FmcWt0dHFqYnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5MTk1ODgsImV4cCI6MjAwNTQ5NTU4OH0.Ff_iPF-C2ipeWkuzcEhmiTJpVaMMHkta7ZQ4JEm1yiI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
