import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kxordvvtoafqkttqjbxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4b3JkdnZ0b2FmcWt0dHFqYnhvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTkxOTU4OCwiZXhwIjoyMDA1NDk1NTg4fQ.AR3yCDAOAXX9Rq0aUVXpWAzHg1XkSRuwzOACq9c5AqI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
