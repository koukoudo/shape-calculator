<?php

namespace App\Controller;

use App\Entity\CircleSize;
use App\Form\Type\CircleSizeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CircleController extends AbstractController
{
    /**
     * @Route("/circle", name="circle")
     */
    public function index(): Response
    {
        $radius = (object) ['name' => 'radius', 'min' => 1, 'max' => 10, 'val' => 5];
        $circumference = (object) ['name' => 'circumference', 'min' => round(2*pi()*1), 'max' => round(2*pi()*10), 'val' => round(2*pi()*5)];
        $volume = (object) ['name' => 'volume', 'min' => round(4/3*pi()*(1**3)), 'max' => round(4/3*pi()*(10**3)), 'val' => round(4/3*pi()*(5**3))];
        $user_input = array(
            $radius, 
            $circumference,
            $volume
        );

        $size = new CircleSize();
        $size->setRadius(5);
        $size->setCircumference(round(2*pi()*5));
        $size->setVolume(round(4/3*pi()*(5**3)));

        $form = $this->createForm(CircleSizeType::class, $size);

        return $this->render('calculator.html.twig', [
            'form' => $form->createView(),
            'shape' => 'circle',
            'subtitle' => 'Calculate the diameter of a circle',
            'user_input' => $user_input,
            'submit_route' => 'circle_result'
        ]);
    }

    // /**
    //  * @Route("/circle/result", name="circle_result")
    //  */
    // public function circleResult(): Response
    // {

    // }
}
