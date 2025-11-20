import { supabase } from '../lib/supabaseClient';

export const getProfile = async () => {
  const { data, error } = await supabase
    .from('profile')
    .select('*')
    .maybeSingle();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
};

export const getProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data;
};

export const getResume = async () => {
  const { data, error } = await supabase
    .from('resume')
    .select('*')
    .maybeSingle();

  if (error) {
    console.error('Error fetching resume:', error);
    return null;
  }

  return data;
};
