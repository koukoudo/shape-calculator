<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TriangleController extends AbstractController
{
    /**
     * @Route("/triangle", name="triangle")
     */
    public function index(): Response
    {
        $user_input = array(
            'base',
            'height'
        );

        return $this->render('calculator.html.twig', [
            'shape' => 'triangle',
            'subtitle' => 'Calculate the surface area of a triangle',
            'user_input' => $user_input
        ]);
    }
}