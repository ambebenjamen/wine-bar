// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wrzbhvekkfwglnvwubti.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyemJodmVra2Z3Z2xudnd1YnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMTk3MTUsImV4cCI6MjA2NzU5NTcxNX0.V-d5YmwNNtzWmS0OddZEUBnq6tVRVs7kZv192GTL2m4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});