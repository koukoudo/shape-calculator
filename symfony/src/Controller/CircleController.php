<?php

namespace App\Controller;

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
        $user_input = array(
            'radius',
            'circumference',
            'volume'
        );

        return $this->render('calculator.html.twig', [
            'shape' => 'circle',
            'subtitle' => 'Calculate the diameter of a circle',
            'user_input' => $user_input
        ]);
    }
}
