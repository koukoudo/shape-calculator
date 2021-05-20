<?

namespace App\Entity;

class CircleSize
{
    protected $radius;
    protected $circumference;
    protected $volume;

    function __construct() 
    {
        $this->radius = 5;
        $this->circumference = round(pi()*10);
        $this->volume = round(2/3*pi()*(10**3));
    }

    public function getRadius(): int
    {
        return $this->radius;
    }

    public function setRadius(int $radius): void
    {
        $this->radius = $radius;
    }

    public function getCircumference(): int
    {
        return $this->circumference;
    }

    public function setCircumference(int $circumference): void
    {
        $this->circumference = $circumference;
    }
    
    public function getVolume(): int
    {
        return $this->volume;
    }

    public function setVolume(int $volume): void
    {
        $this->volume = $volume;
    }
}