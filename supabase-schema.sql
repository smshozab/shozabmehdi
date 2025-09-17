-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX idx_contact_messages_email ON contact_messages(email);

-- Create an index on created_at for sorting
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for contact form submissions)
CREATE POLICY "Allow public insert on contact_messages" 
ON contact_messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create a policy that allows authenticated users to read all messages
-- (You can modify this based on your authentication setup)
CREATE POLICY "Allow authenticated users to read contact_messages" 
ON contact_messages 
FOR SELECT 
TO authenticated 
USING (true);

-- Create a policy that allows authenticated users to update messages
CREATE POLICY "Allow authenticated users to update contact_messages" 
ON contact_messages 
FOR UPDATE 
TO authenticated 
USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_contact_messages_updated_at 
    BEFORE UPDATE ON contact_messages 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
