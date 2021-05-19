<?

namespace App\Entity;

class CircleSize
{
    protected $size;
    protected $radius;
    protected $circumference;
    protected $volume;

    public function getSize(): int
    {
        return $this->size;
    }

    public function setSize(int $size): void
    {
        $this->size = $size;
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