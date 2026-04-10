namespace api.models;

public class User
{
    public Guid ID { get; set; }

    public string Username { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }

    public ICollection<Pixel> Pixels { get; set; }
}