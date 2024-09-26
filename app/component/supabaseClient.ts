// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xnfmnmqgkaircknxijmr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZm1ubXFna2FpcmNrbnhpam1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NDE0MDUsImV4cCI6MjAzNzMxNzQwNX0.JebiutGiRUGpdbjZKJB78mD2e6DaFNCNh2XXzKMcciA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
