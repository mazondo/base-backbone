require "sinatra"

get "/" do
	File.read(File.join(Dir.pwd, 'public', 'index.html'))
end
