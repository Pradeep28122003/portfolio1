/*
  # Portfolio Database Schema

  1. New Tables
    - `profile`
      - `id` (uuid, primary key)
      - `name` (text) - Portfolio owner name
      - `title` (text) - Professional title
      - `bio` (text) - About section content
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `twitter_url` (text) - Social media link
      - `facebook_url` (text) - Social media link
      - `linkedin_url` (text) - Social media link
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `image_url` (text) - Project image URL
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `resume`
      - `id` (uuid, primary key)
      - `description` (text) - Resume section description
      - `file_url` (text) - Resume file download URL
      - `preview_image_url` (text) - Resume preview image
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add public read access policies (portfolio is public-facing)
    - Add authenticated write policies for content management

  3. Important Notes
    - All tables use default values for timestamps
    - RLS policies allow public read access since this is a portfolio site
    - Write access requires authentication for future admin panel
*/

-- Create profile table
CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  title text NOT NULL DEFAULT '',
  bio text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  twitter_url text DEFAULT '',
  facebook_url text DEFAULT '',
  linkedin_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create resume table
CREATE TABLE IF NOT EXISTS resume (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  description text NOT NULL DEFAULT '',
  file_url text NOT NULL DEFAULT '',
  preview_image_url text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume ENABLE ROW LEVEL SECURITY;

-- Profile policies (public read, authenticated write)
CREATE POLICY "Allow public read access to profile"
  ON profile FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update profile"
  ON profile FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert profile"
  ON profile FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Projects policies (public read, authenticated write)
CREATE POLICY "Allow public read access to projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Resume policies (public read, authenticated write)
CREATE POLICY "Allow public read access to resume"
  ON resume FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update resume"
  ON resume FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert resume"
  ON resume FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert initial data
INSERT INTO profile (name, title, bio, email, phone, twitter_url, facebook_url, linkedin_url)
VALUES (
  'Pradeep',
  'Full-stack Developer',
  'I''m a full-stack developer specializing in React.js and Spring Boot. I enjoy turning ideas into real-world applications and constantly learning new tools and frameworks to improve my craft.',
  'pradeepkumark2812@gmail.com',
  '+91 86674 77846',
  'https://twitter.com/',
  'https://facebook.com/',
  'https://linkedin.com/'
)
ON CONFLICT DO NOTHING;

INSERT INTO projects (title, description, image_url, order_index)
VALUES 
  ('E-commerce Website', 'E-commerce website built with React.js and Spring Boot', '/src/assets/ecommerce.png', 1),
  ('HRMS Application', 'HRMS application built with React.js and Spring Boot', '/src/assets/hrms.png', 2)
ON CONFLICT DO NOTHING;

INSERT INTO resume (description, file_url, preview_image_url)
VALUES (
  'You can view my resume here:',
  'files/Pradeep Kumar resume. (1).pdf',
  '/src/assets/res.photo.jpeg'
)
ON CONFLICT DO NOTHING;